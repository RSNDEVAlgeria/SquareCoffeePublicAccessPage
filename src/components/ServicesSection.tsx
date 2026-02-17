// made by leyn.cx
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Heart, Users, Coffee, Cake, CalendarDays, Sparkles, ArrowUpRight } from "lucide-react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Heart,
      title: t("Romantic Dates"),
      description: t("Romantic Dates desc"),
      span: "lg:col-span-2",
      gradient: "from-pink-500/20 to-rose-500/10",
    },
    {
      icon: Cake,
      title: t("Anniversary Celebrations"),
      description: t("Anniversary desc"),
      span: "",
      gradient: "from-amber-500/20 to-orange-500/10",
    },
    {
      icon: Users,
      title: t("Family Reunions"),
      description: t("Family desc"),
      span: "",
      gradient: "from-blue-500/20 to-cyan-500/10",
    },
    {
      icon: CalendarDays,
      title: t("Parties"),
      description: t("Parties desc"),
      span: "lg:col-span-2",
      gradient: "from-purple-500/20 to-violet-500/10",
    },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-muted/50 via-background to-muted/30 relative overflow-hidden" ref={ref}>
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      
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
            <Sparkles className="w-4 h-4" />
            {t("What We Offer")}
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-3 mb-4">
            {t("Host Your Moments")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("From intimate dates...")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative p-8 bg-background rounded-3xl border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden ${service.span || ''}`}
            >
              {/* Gradient Background */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              
              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                    rotate: hoveredIndex === index ? 5 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300 shadow-lg shadow-primary/5"
                >
                  <service.icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-base">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <motion.div 
                  className="mt-6 flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  animate={{ x: hoveredIndex === index ? 0 : -10 }}
                >
                  <span>Learn more</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Decorative Corner Element */}
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-[100px]"
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                  rotate: hoveredIndex === index ? 12 : 0,
                }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Bottom Line Animation */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-primary/50"
                initial={{ width: "0%" }}
                animate={{ width: hoveredIndex === index ? "100%" : "0%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary text-primary-foreground font-semibold rounded-2xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
          >
            {t("Inquire About Hosting")}
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
