import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { title: "Início", link: "/" },
  { title: "Programação", link: "/schedule" },
  { title: "Notícias", link: "/" },
  { title: "Fotos", link: "/" },
];

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
      <div className="absolute right-48 lg:hidden top-12">
        <button
          onClick={toggleMenu}
          className="p-2 text-black focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute right-0 top-full rounded-b-lg bg-white shadow-lg">
            <div className="flex flex-col py-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="px-4 py-2 text-base font-medium text-black transition duration-200 hover:bg-slate-100"
                  onClick={() => setIsMenuOpen(false)}
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
