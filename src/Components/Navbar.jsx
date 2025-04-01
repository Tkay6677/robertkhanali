import { useState } from 'react';
import NavMenu from './NavMenu';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full shadow-sm px-4 py-2 bg-[#F5F5F5] z-50"> {/* Increased z-index to 50 */}
      <div className="max-w-screen-2xl w-full mx-auto flex justify-between items-center md:px-6 md:py-4">
        <div className="flex items-center gap-1">
          <img src="./logo.jpg" alt="Logo" width={40} height={40} />
          {/* <h2 className="text-[#4B0082] font-bold text-2xl">VIOSAM</h2> */}
        </div>
        <div className="items-center gap-5 lg:gap-10 hidden md:flex">
          <a href="#home" className="text-sm font-medium text-[#4B0082] hover:text-[#FFD700] active:text-[#87CEEB]">
            Home
          </a>
          <a href="#about" className="text-sm font-medium text-[#4B0082] hover:text-[#FFD700] active:text-[#87CEEB]">
            About
          </a>
          <a href="#services" className="text-sm font-medium text-[#4B0082] hover:text-[#FFD700] active:text-[#87CEEB]">
            Services
          </a>
          {/* <a href="#products" className="text-sm font-medium text-[#4B0082] hover:text-[#FFD700] active:text-[#87CEEB]">
            Products
          </a> */}
          {/* <a href="#gallery" className="text-sm font-medium text-[#4B0082] hover:text-[#FFD700] active:text-[#87CEEB]">
            Gallery
          </a> */}
          <a href="#contact" className="text-sm font-medium text-[#4B0082] hover:text-[#FFD700] active:text-[#87CEEB]">
            Contact
          </a>
        </div>
        <div className="hidden md:block">
          <button className="md:bg-[#4B0082] md:text-[#FFD700] md:px-3 md:py-2 lg:px-5 rounded hover:bg-[#8A9A5B] transition-colors">
            Client Portal
          </button>
        </div>
        <div className="block md:hidden">
          <span
            className="material-symbols-rounded block md:hidden px-1 bg-[#87CEEB] py-1 rounded font-medium text-[#4B0082]"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? 'close' : 'menu'}
          </span>
        </div>
      </div>
      <NavMenu navOpen={navOpen} setNavOpen={setNavOpen} />
    </nav>
  );
};

export default Navbar;