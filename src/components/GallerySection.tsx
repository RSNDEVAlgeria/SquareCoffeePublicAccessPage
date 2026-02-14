import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
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
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const selectedImage = selectedImageIndex !== null ? galleryImages[selectedImageIndex] : null;

  const handleNext = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
    }
  }, [selectedImageIndex]);

  const handlePrev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  }, [selectedImageIndex]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedImageIndex === null) return;
    if (e.key === "ArrowRight") handleNext(e as unknown as React.MouseEvent);
    if (e.key === "ArrowLeft") handlePrev(e as unknown as React.MouseEvent);
    if (e.key === "Escape") setSelectedImageIndex(null);
  }, [selectedImageIndex, handleNext, handlePrev]);

  // Add keyboard event listener
  useState(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <>
      <section id="gallery" className="section-padding bg-gradient-to-b from-background to-card relative overflow-hidden" ref={ref}>
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 border border-primary/10 rounded-full" />
        <div className="absolute bottom-20 left-10 w-48 h-48 border border-primary/10 rounded-full" />
        
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

          {/* Gallery */}
          {/* Mobile Carousel */}
          <div className="md:hidden px-4"> 
            <Carousel className="w-full max-w-[calc(100vw-2rem)] mx-auto">
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative overflow-hidden rounded-3xl cursor-pointer group"
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-white text-lg font-medium">
                          {image.alt}
                        </p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* Desktop-only navigation to prevent white-side overflow on mobile */}
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
            <p className="text-center text-sm text-muted-foreground mt-4">{t("Swipe to see more")}</p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:block">
            <div className="grid grid-cols-4 gap-5">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`relative overflow-hidden rounded-3xl cursor-pointer group ${image.span}`}
                  onClick={() => setSelectedImageIndex(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="aspect-square md:aspect-auto md:h-80 overflow-hidden">
                    <motion.img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                  </div>
                  {/* Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Content */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 20 
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="text-white text-xl font-semibold">
                      {image.alt}
                    </p>
                    <p className="text-white/70 text-sm mt-1">Click to view</p>
                  </motion.div>
                  {/* Corner Accent */}
                  <motion.div
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0,
                      scale: hoveredIndex === index ? 1 : 0.5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              onClick={() => setSelectedImageIndex(null)}
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            {/* Navigation Buttons */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              onClick={handleNext}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              key={selectedImageIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] rounded-xl shadow-2xl object-contain"
              />
              {/* Caption */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl"
              >
                <p className="text-white text-xl font-semibold text-center">{selectedImage.alt}</p>
                <p className="text-white/60 text-sm text-center mt-1">
                  {selectedImageIndex! + 1} / {galleryImages.length}
                </p>
              </motion.div>
            </motion.div>

            {/* Thumbnail Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2"
            >
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedImageIndex ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;