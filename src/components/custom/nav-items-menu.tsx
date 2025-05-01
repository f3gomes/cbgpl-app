import React from "react";
import { navItems } from "@/data/list";

const NavMenu = () => {
  return (
    <nav className="">
      <div className="hidden h-[25px] w-[586px] items-center justify-around xl:flex xl:justify-between">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target={
              item.title === "Materiais" || item.title === "Fotos"
                ? "_blank"
                : "_self"
            }
            className="text-base font-medium text-black transition duration-200 hover:text-slate-700"
          >
            {item.title}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavMenu;
