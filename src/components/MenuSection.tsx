import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

// Worker URL
const WORKER_URL = "https://square-coffee-cache.squarecoffeedem.workers.dev";

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
            {t("Handcrafted with love")}
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {!loading &&
            items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image_url || "/placeholder.jpg"}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {item.categoryLabel}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-display font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <span className="text-lg font-semibold text-primary whitespace-nowrap">
                      {item.price} DA
                    </span>
                  </div>
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
            <Link to="/menu">{t("View Full Menu with Prices")}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default MenuSection