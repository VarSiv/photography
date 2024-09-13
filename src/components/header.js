import React from 'react';
import logo from '../images/logo.svg';

const Header = () => {
  return (
    <header className="p-4 relative z-10 bg-black" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="container mx-auto">
        <img src={logo} className='max-h-16' />
      </div>
    </header>

  );
};

export default Header;