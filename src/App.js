import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet';

// Import your images here
import bgImage1 from './images/bpeople.png';
import bgImage2 from './images/meeting.png';
import bgImage3 from './images/candlechart.png';
import bgImage4 from './images/stockgoup.png';
import Hero from './components/hero';
import Footer from './components/footer';
import Header from './components/header';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen text-white font-spectral relative">
      <Helmet>
        <title>Velocity Consulting</title>
      </Helmet>
      
      <Hero />
      <div className="absolute inset-0 flex flex-col">
        <Header />
        <div className="flex-grow" />
        <Footer />
      </div>
    </div>
  );
};

export default App;