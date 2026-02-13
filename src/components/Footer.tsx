import logo from "@/assets/IMG-20260108-WA0004.jpg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Coffee, Heart, ArrowUp, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: t("Menu"), href: "#menu" },
    { label: t("Gallery"), href: "#gallery" },
    { label: t("Services"), href: "#services" },
    { label: t("Contact"), href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/squar_coffee",
      icon: (
        <svg viewBox="0 0 448 512" className="w-5 h-5" fill="currentColor">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61574297446369",
      icon: (
        <svg viewBox="0 0 320 512" className="w-5 h-5" fill="currentColor">
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
        </svg>
      ),
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@square.coffee7",
      icon: (
        <svg viewBox="0 0 448 512" className="w-5 h-5" fill="currentColor">
          <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-foreground to-foreground/95 text-primary-foreground overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-primary" />
      
      <div className="container-tight section-padding">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-md" />
                <img 
                  src={logo} 
                  alt="Square Coffee" 
                  className="relative h-12 w-12 rounded-full object-cover ring-2 ring-primary/30" 
                  style={{ filter: "invert(1)" }}
                />
              </div>
              <div>
                <span className="font-display text-xl font-bold">
                  Square Coffee
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              {t("Where every cup tells a story")}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-primary-foreground/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Coffee className="w-5 h-5 text-primary" />
              {t("Quick Links")}
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-primary-foreground/70 hover:text-primary-foreground hover:translate-x-1 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              {t("Contact")}
            </h4>
            <div className="space-y-3">
              <a 
                href="https://maps.google.com/?q=SQUARE+COFFEE+DEM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Algeria/tizi ouzou DEM</span>
              </a>
              <a 
                href="tel:0552564675"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>0552564675</span>
              </a>
              <a 
                href="mailto:squarecoffeedem@gmail.com"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>squarecoffeedem@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              {t("Hours")}
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-primary-foreground/70">{t("Open")}</span>
                <span className="text-primary font-semibold">24/7</span>
              </div>
              <p className="text-xs text-primary-foreground/50 leading-relaxed">
                {t("Always here for your coffee needs, day and night")}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50 flex items-center gap-1">
            made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> by <a href="#" className="hover:text-primary transition-colors font-medium">RSN.Dev</a>
          </p>
          
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-foreground/10 hover:bg-primary/20 transition-colors text-sm"
          >
            <span className="text-primary-foreground/70 group-hover:text-primary-foreground">Back to top</span>
            <ArrowUp className="w-4 h-4 text-primary" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
