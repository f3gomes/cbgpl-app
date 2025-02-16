"use client";

import Image from "next/image";
import { Bell } from "lucide-react";
import { MessageCircle } from "lucide-react";
import UserMenu from "./user-menu";
import { useEffect, useState } from "react";
import NavMenu from "./nav-items-menu";

export default function Header() {
  // eslint-disable-next-line
  const [user, setUser] = useState<any>(null);

  const fetchUser = async () => {
    if (typeof window !== "undefined") {
      const userFromStorage = await JSON.parse(
        window.localStorage.getItem("gtxp-user")!,
      );
      setUser(userFromStorage);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <header className="relative flex h-[134px] items-center justify-between bg-white px-4 py-2 shadow-sm">
      <div className="flex items-center space-x-2">
        <div className="flex-shrink-0">
          <Image
            width={215}
            height={78}
            src="/assets/Design_sem_nome-removebg-preview.png"
            alt="Congresso Logo"
            className="w-[70%] sm:w-[80%] md:w-full object-contain max-w-[215px]"
          />
        </div>
      </div>

      <NavMenu />

      <div className="flex items-center space-x-4 p-4">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 transition-colors hover:bg-orange-600"
        >
          <MessageCircle size={20} className="text-[#FFFFFF]" />
        </button>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 transition-colors hover:bg-orange-600"
        >
          <Bell size={20} className="text-[#FFFFFF]" />
        </button>

        <UserMenu
          name={user?.name}
          email={user?.email}
          imgPath={user?.profileImgUrl}
        />
      </div>
    </header>
  );
}
