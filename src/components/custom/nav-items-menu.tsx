import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, navItemsMobile } from "../data/list";

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="">
      {/* Desktop Navigation */}
      <div className="hidden h-[25px] w-[586px] items-center justify-around lg:flex xl:justify-between">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-base font-medium text-black transition duration-200 hover:text-slate-700"
          >
            {item.title}
          </a>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="absolute right-[12.5rem] top-12 lg:hidden">
        <button
          onClick={toggleMenu}
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 transition-colors hover:bg-orange-600"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={20} className="text-[#FFFFFF]" />
          ) : (
            <Menu size={20} className="text-[#FFFFFF]" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute right-0 top-full z-20 rounded-b-lg bg-white shadow-lg">
            <div className="flex flex-col py-2">
              {navItemsMobile.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer px-4 py-2 text-base font-medium text-black transition duration-200 hover:bg-slate-100"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavMenu;
