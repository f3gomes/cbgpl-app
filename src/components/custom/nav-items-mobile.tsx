"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItemsMobile } from "../data/list";
import { Dialog, DialogTrigger } from "../ui/dialog";
import FeedbackModal from "./feedback-modal";
import Link from "next/link";

export default function NavItemsMobile() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 transition-colors hover:bg-orange-600"
        aria-label="Toggle menu"
      >
        {openMenu ? (
          <X size={20} className="text-[#FFFFFF]" />
        ) : (
          <Menu size={20} className="text-[#FFFFFF]" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {openMenu && (
        <div className="absolute right-0 top-24 z-20 rounded-b-lg bg-white shadow-lg">
          <div className="flex flex-col py-2">
            {navItemsMobile.map((item, index) => (
              <>
                {item.title === "Feedback" ? (
                  <Dialog>
                    <DialogTrigger className="ml-4 mt-1 flex w-full items-center justify-start gap-3 [&_svg]:h-6 [&_svg]:w-6">
                      <span className="font-inter text-base">{item.title}</span>
                    </DialogTrigger>
                    <FeedbackModal />
                  </Dialog>
                ) : (
                  <Link
                    key={index}
                    href={item.link}
                    target="_blank"
                    onClick={() => setOpenMenu(false)}
                    className="cursor-pointer px-4 py-2 text-base font-medium text-black transition duration-200 hover:bg-slate-100"
                  >
                    {item.title}
                  </Link>
                )}
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
