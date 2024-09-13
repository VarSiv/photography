import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet';

// Import your images here
import bgImage1 from './images/bpeople.png';
import bgImage2 from './images/meeting.png';
import bgImage3 from './images/candlechart.png';
import bgImage4 from './images/stockgoup.png';

const App = () => {
  const originalImages = [bgImage1, bgImage2, bgImage3, bgImage4];
  const images = [originalImages[originalImages.length - 1], ...originalImages, originalImages[0]];
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);

  const moveToNextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex(prevIndex => prevIndex + 1);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const intervalId = setInterval(moveToNextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [moveToNextSlide]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const transitionEnd = () => {
      if (currentImageIndex === images.length - 1) {
        setIsTransitioning(false);
        container.style.transition = 'none';
        setCurrentImageIndex(1);
        setTimeout(() => {
          container.style.transition = 'transform 1s ease-in-out';
        }, 50);
      } else if (currentImageIndex === 0) {
        setIsTransitioning(false);
        container.style.transition = 'none';
        setCurrentImageIndex(images.length - 2);
        setTimeout(() => {
          container.style.transition = 'transform 1s ease-in-out';
        }, 50);
      } else {
        setIsTransitioning(false);
      }
    };

    container.addEventListener('transitionend', transitionEnd);
    return () => {
      container.removeEventListener('transitionend', transitionEnd);
    };
  }, [currentImageIndex, images.length]);

  return (
    <div className="flex flex-col min-h-screen text-white font-spectral">
      <Helmet>
        <title>Velocity Consulting</title>
      </Helmet>
      
      <style jsx>{`
        .custom-bullet {
          list-style: none;
        }
        .custom-bullet li {
          position: relative;
          padding-left: 1.5em;
        }
        .custom-bullet li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.6em;
          width: 0.6em;
          height: 0.6em;
          border: 1px solid white;
          border-radius: 50%;
        }
        .bg-image-container {
          position: absolute;
          top: 0;
          left: 0;
          width: ${images.length * 100}%;
          height: 100%;
          display: flex;
          transition: transform 1s ease-in-out;
        }
        .bg-image {
          width: ${100 / images.length}%;
          height: 100%;
          background-size: cover;
          background-position: center;
        }
      `}</style>

      {/* Navbar */}
      <header className="bg-black p-4 relative z-10">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Velocity Consulting</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow flex items-start pt-12 relative overflow-hidden">
        <div 
          ref={containerRef}
          className="bg-image-container"
          style={{
            transform: `translateX(-${currentImageIndex * (100 / images.length)}%)`,
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="bg-image"
              style={{
                backgroundImage: `url(${img})`,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto h-full py-8 relative z-10">
          <div className="w-full lg:w-3/4 h-full flex flex-col">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-5xl leading-tight mb-8 font-bold">
                A global independent investment consulting boutique providing strategic advice for M&A deals and corporate finance.
              </h2>
            </div>

            {/* Bullet points */}
            <div className="mb-auto">
              <h3 className="text-4xl font-semibold mb-6">
                We assist with:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 pb-5">
                <ul className="custom-bullet space-y-4">
                  <li className="text-2xl font-semibold">Finding strategic/financial buyers for your company</li>
                  <li className="text-2xl font-semibold">Identifying acquisition targets</li>
                  <li className="text-2xl font-semibold">Structuring financing for your business</li>
                </ul>
                <ul className="custom-bullet space-y-4">
                  <li className="text-2xl font-semibold">Supporting due diligence</li>
                  <li className="text-2xl font-semibold">Developing transaction structures</li>
                  <li className="text-2xl font-semibold">Negotiating SPAs and other legal documents</li>
                </ul>
              </div>
            </div>

            {/* Clients */}
            <div className="mt-12">
              <h3 className="text-4xl font-semibold mb-4">
                Our clients include:
              </h3>
              <p className="text-2xl font-semibold">
                XTX Markets, ETC Group (acquired by Bitwise in August 2024), and Freedom Finance Europe.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black p-4 relative z-10">
        <div className="container mx-auto">
          <p className="text-base">&copy; 2024 Velocity Consulting. All rights reserved. | Please contact us at info@VelocityC.com</p>
        </div>
      </footer>
    </div>
  );
};

export default App;