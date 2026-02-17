import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

type Product = {
  id: number
  name: string
  price: number
  type: string
  image_url: string | null
}

type UIProduct = Product & {
  categoryLabel: string
}

type CategoryValue = "All" | "Option1" | "Option2" | "Option3"

const Menu = () => {
  const [items, setItems] = useState<UIProduct[]>([])
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState<CategoryValue>("All")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true)

      try {
        // 2. Pull data from Worker Cache instead of Supabase
        const response = await fetch('/api');
        
        if (!response.ok) throw new Error("Failed to fetch from cache");
        
        const data: Product[] = await response.json();

        // 3. Keep your existing mapping logic
        const mapped: UIProduct[] = data.map((p) => {
          let label = t("categories.other")
          if (p.type === "Option3") label = t("Sweet Food")
          if (p.type === "Option1") label = t("Salted Food")
          if (p.type === "Option2") label = t("Drink")

          return {
            ...p,
            categoryLabel: label,
          }
        })

        setItems(mapped)
      } catch (error) {
        console.error("Cache load error:", error)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [t])

  // Filter buttons logic remains the same
  const filterButtons: { label: string; value: CategoryValue }[] = [
    { label: t("All"), value: "All" },
    { label: t("Sweet Food"), value: "Option3" },
    { label: t("Salted Food"), value: "Option1" },
    { label: t("Drink"), value: "Option2" },
  ]

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.type === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container-tight section-padding !py-8">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t("Back to Home")}
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
              {t("Menu")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("Discover our carefully curated selection of premium coffees and food")}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="container-tight section-padding">
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filterButtons.map((b) => (
            <Button
              key={b.value}
              variant={selectedCategory === b.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(b.value)}
              className="px-6 py-2"
            >
              {b.label}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {loading ? (
            <div className="col-span-full text-center py-20 text-muted-foreground">
              {t("Loading...")}
            </div>
          ) : (
            filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-border"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image_url || "/placeholder.jpg"}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-4 right-4 px-3 py-1 bg-background/90 text-foreground text-xs font-medium rounded-full">
                    {item.categoryLabel}
                  </span>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                    {item.name}
                  </h3>
                  <div className="inline-flex items-center justify-center px-4 py-2 bg-muted rounded-md border border-border font-semibold">
                    {item.price.toFixed(2)} DA
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Menu