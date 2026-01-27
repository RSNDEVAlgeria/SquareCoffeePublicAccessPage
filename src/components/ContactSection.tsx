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
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground/5 hover:bg-primary/10 transition-colors group"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">square_coffee</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61574297446369"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground/5 hover:bg-primary/10 transition-colors group"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">Square Coffee</span>
              </a>
              <a
                href="https://www.tiktok.com/@square.coffee7"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground/5 hover:bg-primary/10 transition-colors group"
              >
                <Video className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">square.coffee7</span>
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
