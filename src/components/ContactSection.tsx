// made by leyn.cx
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Video,
  Send,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", phone: "", eventType: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container-tight">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            {t("Get in Touch")}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            {t("Visit or Contact Us")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("We'd love to hear from you...")}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Algeria/tizi ouzou DEM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground"><a href="tel:0552564675" className="hover:underline">0552564675</a></p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground"><a href="mailto:squarecoffeedem@gmail.com" className="hover:text-primary transition-colors">squarecoffeedem@gmail.com</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Hours</h4>
                    <p className="text-muted-foreground">
                      Open 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 py-4">
              <a
  href="https://www.instagram.com/squar_coffee"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground/5 hover:bg-primary/10 transition-colors group"
>
  <svg 
    viewBox="0 0 448 512" 
    className="w-5 h-5 fill-muted-foreground group-hover:fill-primary transition-colors"
    aria-hidden="true"
  >
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
  </svg>
  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
    squar_coffee
  </span>
</a>

{/* Facebook Link */}
<a
  href="https://www.facebook.com/profile.php?id=61574297446369"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground/5 hover:bg-primary/10 transition-colors group"
>
  <svg 
    viewBox="0 0 320 512" 
    className="w-5 h-5 fill-muted-foreground group-hover:fill-primary transition-colors"
    aria-hidden="true"
  >
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
  </svg>
  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
    Square Coffee
  </span>
</a>

{/* TikTok Link */}
<a
  href="https://www.tiktok.com/@square.coffee7"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground/5 hover:bg-primary/10 transition-colors group"
>
  <svg 
    viewBox="0 0 448 512" 
    className="w-5 h-5 fill-muted-foreground group-hover:fill-primary transition-colors"
    aria-hidden="true"
  >
    <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/>
  </svg>
  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
    square.coffee7
  </span>
</a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-64 lg:h-96 shadow-lg border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.579988918562!2d3.8330021755368775!3d36.5390222823791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128c2d00712ba985%3A0xea1efa914fe248de!2sSQUARE%20COFFEE!5e1!3m2!1sen!2sdz!4v1769247595923!5m2!1sen!2sdz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Square Coffee Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
