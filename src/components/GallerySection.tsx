// made by leyn.cx
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import gallery2 from "@/assets/IMG-20260122-WA0001(1).jpg";
import gallery4 from "@/assets/IMG-20260122-WA0004.jpg";
import gallery5 from "@/assets/IMG-20260122-WA0009.jpg";
import gallery6 from "@/assets/IMG-20260122-WA0011.jpg";
import gallery7 from "@/assets/IMG-20260122-WA0012(1).jpg";

const galleryImages = [
  { src: gallery2, alt: "Coffee Art", span: "md:col-span-2" },
  { src: gallery4, alt: "Square Coffee Vibes", span: "md:col-span-2" },
  { src: gallery5, alt: "Delicious Treats", span: "" },
  { src: gallery6, alt: "Good Times", span: "" },
  { src: gallery7, alt: "Specialty Brews", span: "md:col-span-2" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useTranslation();

  return (
    <>
      <section id="gallery" className="section-padding bg-background" ref={ref}>
        <div className="container-tight">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Our Space
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
              {t("A Glimpse Inside")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("From our cozy reading corners...")}
            </p>
          </motion.div>

          {/* Gallery */}
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel className="w-full">
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative overflow-hidden rounded-2xl cursor-pointer group hover:rounded-3xl transition-all duration-500"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500 rounded-2xl group-hover:rounded-3xl" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <p className="text-primary-foreground text-sm font-medium">
                          {image.alt}
                        </p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <p className="text-center text-sm text-muted-foreground mt-2">{t("Swipe to see more")}</p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:block">
            <div className="grid grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative overflow-hidden rounded-2xl cursor-pointer group ${image.span} hover:rounded-3xl transition-all duration-500`}
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="aspect-square md:aspect-auto md:h-72 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500 rounded-2xl group-hover:rounded-3xl" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-primary-foreground text-sm font-medium">
                      {image.alt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
          />
        </motion.div>
      )}
    </>
  );
};

export default GallerySection;
