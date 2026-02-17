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
  MessageCircle,
  ExternalLink,
  Navigation,
} from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const contactInfo = [
    {
      id: "location",
      icon: MapPin,
      title: "Location",
      content: "Algeria/tizi ouzou DEM",
      link: "https://maps.google.com/?q=SQUARE+COFFEE+DEM",
      color: "from-blue-500/20 to-cyan-500/10",
    },
    {
      id: "phone",
      icon: Phone,
      title: "Phone",
      content: "0552564675",
      link: "tel:0552564675",
      color: "from-green-500/20 to-emerald-500/10",
    },
    {
      id: "email",
      icon: Mail,
      title: "Email",
      content: "squarecoffeedem@gmail.com",
      link: "mailto:squarecoffeedem@gmail.com",
      color: "from-amber-500/20 to-orange-500/10",
    },
    {
      id: "hours",
      icon: Clock,
      title: "Hours",
      content: "Open 24/7",
      link: null,
      color: "from-purple-500/20 to-violet-500/10",
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      username: "squar_coffee",
      url: "https://www.instagram.com/squar_coffee",
      icon: (
        <svg viewBox="0 0 448 512" className="w-5 h-5" aria-hidden="true">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
        </svg>
      ),
    },
    {
      name: "Facebook",
      username: "Square Coffee",
      url: "https://www.facebook.com/profile.php?id=61574297446369",
      icon: (
        <svg viewBox="0 0 320 512" className="w-5 h-5" aria-hidden="true">
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
        </svg>
      ),
    },
    {
      name: "TikTok",
      username: "square.coffee7",
      url: "https://www.tiktok.com/@square.coffee7",
      icon: (
        <svg viewBox="0 0 448 512" className="w-5 h-5" aria-hidden="true">
          <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-card to-background relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-tight relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <MessageCircle className="w-4 h-4" />
            {t("Get in Touch")}
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-3 mb-4">
            {t("Visit or Contact Us")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("We'd love to hear from you...")}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Info Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-background rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                    animate={{
                      scale: hoveredCard === item.id ? 1.1 : 1,
                      rotate: hoveredCard === item.id ? 5 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  
                  <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                  
                  {item.link ? (
                    <a 
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : undefined}
                      rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1"
                    >
                      {item.content}
                      {item.link.startsWith("http") && <ExternalLink className="w-3 h-3" />}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{item.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 px-6 py-4 bg-background rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-muted-foreground group-hover:text-primary transition-colors fill-current">
                  {social.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{social.name}</p>
                  <p className="text-xs text-muted-foreground">@{social.username}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50"
          >
            {/* Map Header */}
            <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/60 to-transparent">
              <div className="flex items-center gap-2 text-white">
                <Navigation className="w-5 h-5" />
                <span className="font-medium">Find us on the map</span>
              </div>
            </div>
            
            <div className="h-80 lg:h-[450px]">
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
