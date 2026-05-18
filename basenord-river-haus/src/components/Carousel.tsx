import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Carousel({ 
  images, 
  aspectRatio = "aspect-[21/9]",
  autoplayInterval = 3000
}: { 
  images: string[],
  aspectRatio?: string,
  autoplayInterval?: number
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((cur) => (cur + 1) % images.length);
  const prev = () => setCurrentIndex((cur) => (cur - 1 + images.length) % images.length);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      next();
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [images.length, autoplayInterval]);

  return (
    <div className={`relative w-full ${aspectRatio} bg-[#E5E5E0] overflow-hidden group`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover filter contrast-110 saturate-75"
        />
      </AnimatePresence>
      <button onClick={prev} type="button" className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-2 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <ChevronLeft className="w-6 h-6 text-[#1A1A1A]" />
      </button>
      <button onClick={next} type="button" className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-2 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <ChevronRight className="w-6 h-6 text-[#1A1A1A]" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <div key={i} className={`h-1 transition-all ${i === currentIndex ? 'w-6 bg-white' : 'w-4 bg-white/50'}`} />
        ))}
      </div>
    </div>
  );
}
