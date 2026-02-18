import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ImageIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import CircularGallery from "./CircularGallery";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const galleryImages = [
  { src: gallery1, altKey: "gallery1" },
  { src: gallery2, altKey: "gallery2" },
  { src: gallery3, altKey: "gallery3" },
  { src: gallery4, altKey: "gallery4" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const galleryItems = galleryImages.map((image) => ({
    image: image.src,
    text: "",
  }));

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-background to-card relative overflow-hidden" ref={ref}>
      <div className="absolute top-20 right-10 w-32 h-32 border border-primary/10 rounded-full" />
      <div className="absolute bottom-20 left-10 w-48 h-48 border border-primary/10 rounded-full" />
      
      <div className="container-tight relative z-10">
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
            <ImageIcon className="w-4 h-4" />
            {t("Our Space")}
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-3 mb-4">
            {t("A Glimpse Inside")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("From our cozy reading corners...")}
          </p>
        </motion.div>

        <div style={{ height: '500px', position: 'relative' }}>
          <CircularGallery 
            items={galleryItems}
            bend={0}
            borderRadius={0.15}
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
