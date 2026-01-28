// made by leyn.cx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/IMG-20260108-WA0001.jpg";
import logo from "@/assets/IMG-20260108-WA0004.jpg";

const HeroSection = () => {
  const { t } = useTranslation()
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Blurred Background Image */}
      <motion.div
        initial={{ scale: 1.02, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: "blur(2px)",
            transform: "scale(1)",
          }}
        />
        <div className="absolute inset-0 bg-background/40" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 container-tight section-padding flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        {/* Logo - Coming from Right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="order-1 lg:order-2"
        >
          <img
  src={logo}
  alt="Square Coffee Logo"
  className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover drop-shadow-2xl"
  style={{ 
    filter: "grayscale(1) contrast(200%) brightness(120%)", 
    mixBlendMode: "multiply" 
  }}
/>
        </motion.div>

        {/* Text Content - Coming from Left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1 text-center lg:text-left max-w-xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6"
          >
            Square
            <br />
            <span className="text-primary">Coffee</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-xl md:text-2xl text-muted-foreground font-light italic mb-8"
          >
            {t("Where every cup tells a story")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#menu"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              {t("Explore Menu")}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-foreground/20 text-foreground font-medium rounded-lg hover:bg-foreground/5 transition-all duration-300"
            >
              {t("Book an Event")}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
