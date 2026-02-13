// made by leyn.cx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Coffee, ArrowRight } from "lucide-react";
import heroImage from "@/assets/IMG-20260108-WA0001.jpg";
import logo from "@/assets/IMG-20260108-WA0004.jpg";

const HeroSection = () => {
  const { t } = useTranslation()
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Blurred Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: "blur(3px)",
            transform: "scale(1.1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
      </motion.div>

      {/* Floating Coffee Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 18}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          >
            <Coffee className="w-6 h-6 text-primary/20" />
          </motion.div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 container-tight section-padding flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
        {/* Logo - Coming from Right with Enhanced Animation */}
        <motion.div
          initial={{ x: 120, opacity: 0, rotate: 10 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="order-1 lg:order-2 relative"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative"
          >
            {/* Glow Effect Behind Logo */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110" />
            <img
              src={logo}
              alt="Square Coffee Logo"
              className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl ring-4 ring-background/50"
              style={{ 
                filter: "grayscale(1) contrast(200%) brightness(120%)", 
                mixBlendMode: "multiply" 
              }}
            />
          </motion.div>
        </motion.div>

        {/* Text Content - Coming from Left with Staggered Animation */}
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="order-2 lg:order-1 text-center lg:text-left max-w-2xl"
        >
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Coffee className="w-4 h-4" />
            {t("Premium Coffee Experience")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-[0.95] mb-6"
          >
            <span className="block">Square</span>
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              Coffee
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-10 max-w-lg mx-auto lg:mx-0"
          >
            {t("Where every cup tells a story")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              {t("Explore Menu")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-background/80 backdrop-blur-sm border-2 border-foreground/20 text-foreground font-semibold rounded-xl hover:bg-background hover:border-foreground/30 transition-all duration-300"
            >
              {t("Book an Event")}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">{t("Scroll")}</span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-12 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2 bg-background/50 backdrop-blur-sm"
        >
          <motion.div 
            className="w-1.5 h-3 bg-primary rounded-full"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
