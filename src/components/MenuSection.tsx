import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Sparkles, ArrowUpRight } from "lucide-react"

// Worker URL
const WORKER_URL = "https://assets.squarecoffee.shop";

type Product = {
  id: string
  name: string
  price: number
  type: string
  image_url: string | null
}

type UIProduct = Product & {
  categoryLabel: string
}

const MenuSection = () => {
  const { t } = useTranslation()
  const [items, setItems] = useState<UIProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true)

      try {
        // Fetch from Worker Cache
        const response = await fetch(WORKER_URL);
        if (!response.ok) throw new Error("Worker fetch failed");
        
        const data: Product[] = await response.json();

        // Map and limit to 6 items (Favorites)
        // We slice(0, 6) to show only the 6 most recent products
        const mapped: UIProduct[] = data
          .slice(0, 6) 
          .map((p) => {
            let label = "Other"
            if (p.type === "Option3" || p.type === "Sweet food") label = "Sweet Food"
            if (p.type === "Option1" || p.type === "Salty food") label = "Salted Food"
            if (p.type === "Option2" || p.type === "Drink") label = "Drink"

            return {
              ...p,
              categoryLabel: t(label),
            }
          });

        setItems(mapped)
      } catch (error) {
        console.error("Failed to load curated products:", error)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [t])

  return (
    <section id="menu" className="section-padding bg-gradient-to-b from-card to-background relative overflow-hidden" ref={ref}>
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container-tight relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            {t("Our Selection")}
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-3 mb-4">
            {t("Curated Favorites")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("Handcrafted with love")}
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {!loading &&
            items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-background rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Card Glow Effect */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                <div className="relative h-60 overflow-hidden">
                  <motion.img
                    src={item.image_url || "/placeholder.jpg"}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-4 py-1.5 bg-background/90 backdrop-blur-sm text-primary text-xs font-semibold rounded-full shadow-lg">
                    {item.categoryLabel}
                  </span>
                  
                  {/* Quick View Button */}
                  <motion.div 
                    className="absolute bottom-4 right-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0,
                      scale: hoveredIndex === index ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </motion.div>
                </div>
                
                <div className="relative p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.name}
                    </h3>
                    <span className="text-lg font-bold text-primary whitespace-nowrap bg-primary/10 px-3 py-1 rounded-full">
                      {item.price} DA
                    </span>
                  </div>
                  
                  {/* Decorative Line */}
                  <motion.div 
                    className="h-0.5 bg-gradient-to-r from-primary to-transparent mt-4"
                    initial={{ width: 0 }}
                    animate={{ width: hoveredIndex === index ? "100%" : "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            ))}
        </div>

        {/* View Full Menu Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button 
            asChild
            size="lg"
            className="rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
          >
            <Link to="/menu" className="inline-flex items-center gap-2">
              {t("View Full Menu with Prices")}
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default MenuSection
