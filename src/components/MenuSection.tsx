// made by leyn.cx
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import latteImg from "@/assets/menu-latte.jpg";
import croissantImg from "@/assets/menu-croissant.jpg";
import coldbrewImg from "@/assets/menu-coldbrew.jpg";
import avocadoImg from "@/assets/menu-avocado.jpg";
import matchaImg from "@/assets/menu-matcha.jpg";

const menuItems = [
  {
    name: "Signature Latte",
    description: "Rich espresso with silky steamed milk and house-made vanilla",
    price: "$5.50",
    image: latteImg,
    tag: "Bestseller",
  },
  {
    name: "Cold Brew",
    description: "Slow-steeped for 18 hours, smooth and refreshing",
    price: "$4.50",
    image: coldbrewImg,
    tag: "Refreshing",
  },
  {
    name: "Matcha Harmony",
    description: "Ceremonial grade matcha whisked with oat milk",
    price: "$6.00",
    image: matchaImg,
    tag: "Healthy",
  },
  {
    name: "Butter Croissant",
    description: "Flaky, golden layers of French-style pastry",
    price: "$4.00",
    image: croissantImg,
    tag: "Fresh Daily",
  },
  {
    name: "Avocado Toast",
    description: "Sourdough topped with fresh avocado and cherry tomatoes",
    price: "$9.50",
    image: avocadoImg,
    tag: "Popular",
  },
];

const MenuSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  return (
    <section id="menu" className="section-padding bg-card" ref={ref}>
      <div className="container-tight">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            {t("Our Selection")}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            {t("Curated Favorites")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("Handcrafted with love...")}
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  {item.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <span className="text-lg font-semibold text-primary whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button asChild>
            <Link to="/menu">
              {t("View Full Menu with Prices")}
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
