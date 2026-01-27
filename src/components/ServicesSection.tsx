// made by leyn.cx
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Heart, Users, Coffee, Cake, CalendarDays, Sparkles } from "lucide-react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const services = [
    {
      icon: Heart,
      title: t("Romantic Dates"),
      description: t("Romantic Dates desc"),
      span: "lg:col-span-2",
    },
    {
      icon: Cake,
      title: t("Anniversary Celebrations"),
      description: t("Anniversary desc"),
      span: "",
    },
    {
      icon: Users,
      title: t("Family Reunions"),
      description: t("Family desc"),
      span: "",
    },
    {
      icon: CalendarDays,
      title: t("Parties"),
      description: t("Parties desc"),
      span: "lg:col-span-2",
    },
  ];

  return (
    <section id="services" className="section-padding bg-muted/50" ref={ref}>
      <div className="container-tight">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            {t("What We Offer")}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
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
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative p-8 bg-background rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:scale-105 transition-all duration-500 cursor-pointer ${service.span || ''}`}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
              >
                <service.icon className="w-7 h-7 text-primary" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 to-primary/5 rounded-bl-[80px] rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            {t("Inquire About Hosting")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
