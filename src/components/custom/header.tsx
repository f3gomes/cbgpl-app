import Image from "next/image";
import { Bell } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { MessageCircle } from "lucide-react";

const topIcons = [MessageCircle, Bell, CircleUserRound];

const navItems = [
  { title: "Início", link: "/" },
  { title: "Programação", link: "/" },
  { title: "Notícias", link: "/" },
  { title: "Fotos", link: "/" },
];

export default function Header() {
  return (
    <header className="relative flex h-[134px] items-center justify-between bg-white px-4 py-2 shadow-sm">
      <div className="flex items-center space-x-2">
        <div className="flex-shrink-0">
          <Image
            width={215}
            height={78}
            src="/assets/Design_sem_nome-removebg-preview.png"
            alt="Congresso Logo"
            className="object-contain"
          />
        </div>
      </div>

      <nav className="flex h-[25px] w-[586px] items-center justify-around xl:justify-between">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-base font-medium text-black transition duration-200 hover:text-slate-700"
          >
            {item.title}
          </a>
        ))}
      </nav>

      <div className="flex items-center space-x-4 p-4">
        {topIcons.map((Item, index) => (
          <button
            key={index}
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 transition-colors hover:bg-orange-600"
          >
            <Item size={20} className="text-[#FFFFFF]" />
          </button>
        ))}
      </div>
    </header>
  );
}
