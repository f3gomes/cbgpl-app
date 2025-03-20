"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItemsMobile } from "../data/list";

export default function NavItemsMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="lg:hidden">
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
        <div className="absolute right-0 top-24 z-20 rounded-b-lg bg-white shadow-lg">
          <div className="flex flex-col py-2">
            {navItemsMobile.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
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
  );
}
