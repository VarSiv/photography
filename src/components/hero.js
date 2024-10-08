import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import your images here
import bgImage1 from '../images/motherson.jpg';
import bgImage2 from '../images/glasses.jpg';
import bgImage3 from '../images/wedding.jpg';
import bgImage4 from '../images/art.jpg';
import bgImage5 from '../images/eyepaint.jpg';
import bgImage6 from '../images/baby.jpg';

const Hero = () => {
  const images = [bgImage1, bgImage2, bgImage3, bgImage4, bgImage5, bgImage6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const moveToNextSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const intervalId = setInterval(moveToNextSlide, 3000);
    return () => clearInterval(intervalId);
  }, [moveToNextSlide]);

  return (
    <main className="flex-grow flex items-start pt-12 relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
          />
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Hero;