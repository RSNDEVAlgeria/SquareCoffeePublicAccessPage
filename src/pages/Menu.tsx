// made by leyn.cx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import latteImg from "@/assets/menu-latte.jpg";
import croissantImg from "@/assets/menu-croissant.jpg";
import coldbrewImg from "@/assets/menu-coldbrew.jpg";
import avocadoImg from "@/assets/menu-avocado.jpg";
import matchaImg from "@/assets/menu-matcha.jpg";

// Default menu items (same as in Admin.tsx)
const defaultMenuItems = [
  {
    id: 1,
    name: "Signature Latte",
    description: "Rich espresso with silky steamed milk and house-made vanilla syrup",
    price: "$5.50",
    image: latteImg,
    tag: "Bestseller",
    category: "Hot Drinks"
  },
  {
    id: 2,
    name: "Cold Brew",
    description: "Slow-steeped for 18 hours, smooth and refreshing with a hint of sweetness",
    price: "$4.50",
    image: coldbrewImg,
    tag: "Refreshing",
    category: "Cold Drinks"
  },
  {
    id: 3,
    name: "Matcha Harmony",
    description: "Ceremonial grade matcha whisked with oat milk and a touch of honey",
    price: "$6.00",
    image: matchaImg,
    tag: "Healthy",
    category: "Hot Drinks"
  },
  {
    id: 4,
    name: "Iced Caramel Macchiato",
    description: "Espresso with vanilla syrup, milk and caramel sauce over ice",
    price: "$5.75",
    image: latteImg,
    tag: "Popular",
    category: "Cold Drinks"
  },
  {
    id: 5,
    name: "Butter Croissant",
    description: "Flaky, golden layers of French-style pastry, baked fresh daily",
    price: "$4.00",
    image: croissantImg,
    tag: "Fresh Daily",
    category: "Pastries"
  },
  {
    id: 6,
    name: "Avocado Toast",
    description: "Sourdough topped with fresh avocado, cherry tomatoes, and microgreens",
    price: "$9.50",
    image: avocadoImg,
    tag: "Popular",
    category: "Food"
  },
  {
    id: 7,
    name: "Cappuccino",
    description: "Classic Italian coffee with equal parts espresso, steamed milk, and foam",
    price: "$4.75",
    image: latteImg,
    tag: "Classic",
    category: "Hot Drinks"
  },
  {
    id: 8,
    name: "Mocha Frappuccino",
    description: "Blended coffee with chocolate syrup, milk, and whipped cream",
    price: "$6.25",
    image: coldbrewImg,
    tag: "Sweet",
    category: "Cold Drinks"
  },
  {
    id: 9,
    name: "Blueberry Muffin",
    description: "Moist muffin packed with fresh blueberries and topped with streusel",
    price: "$3.50",
    image: croissantImg,
    tag: "Fresh",
    category: "Pastries"
  }
];

const categories = ["All", "Hot Drinks", "Cold Drinks", "Pastries", "Food"];

const Menu = () => {
  const { t } = useTranslation();
  const [menuItems, setMenuItems] = useState(defaultMenuItems);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Load menu items from localStorage
    const savedItems = localStorage.getItem("menuItems");
    if (savedItems) {
      setMenuItems(JSON.parse(savedItems));
    }
  }, []);

  const filterButtons = [
    { label: "All", value: "All" },
    { label: "Drinks", value: "Drinks" },
    { label: "Food", value: "Food" }
  ];

  const filteredItems = selectedCategory === "All" 
    ? menuItems 
    : selectedCategory === "Drinks"
    ? menuItems.filter(item => item.category.includes("Drinks"))
    : menuItems.filter(item => item.category === "Pastries" || item.category === "Food");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container-tight section-padding !py-8">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Our Menu
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated selection of premium coffees, teas, and pastries
            </p>
          </motion.div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="container-tight section-padding">
        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-8">
          {filterButtons.map((button) => (
            <Button
              key={button.value}
              variant={selectedCategory === button.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(button.value)}
              className="px-6 py-2"
            >
              {button.label}
            </Button>
          ))}
        </div>
        
        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-border"
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
                <span className="absolute top-4 right-4 px-3 py-1 bg-background/90 text-foreground text-xs font-medium rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    {item.name}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                <div className="flex justify-center">
                  <div className="w-20 h-10 bg-muted text-foreground rounded-md flex items-center justify-center font-semibold text-sm border border-border">
                    {item.price}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;