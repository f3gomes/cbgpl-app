import Link from "next/link";
import { sideIcons, socialIcons } from "@/data/list";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import FeedbackModal from "./feedback-modal";
import Image from "next/image";

interface AsideProps {
  socialIcons: typeof socialIcons;
  sideIcons: typeof sideIcons;
}

export default function AsideLeft({ socialIcons, sideIcons }: AsideProps) {
  return (
    <aside className="flex h-12 w-full flex-col items-center rounded-2xl bg-white px-4 shadow-md xl:h-[600px] xl:w-[330px] xl:p-4 xl:px-0">
      <div className="mt-2 flex w-full justify-between px-3 xl:mt-0">
        {socialIcons.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target="_blank"
            className="[&_svg]:h-7 [&_svg]:w-7"
          >
            {item.icon === "Whatsapp" ? (
              <Image
                src={"/assets/icones/wpp.svg"}
                alt="Ícone do Whatsapp"
                width={28}
                height={28}
              />
            ) : (
              <item.icon size={64} className="text-[#35246F]" />
            )}
          </Link>
        ))}
      </div>

      <div className="hidden xl:block">
        {sideIcons.map((item, index) => (
          <div key={index}>
            <hr className="my-4 border-gray-300" />
            {item.title === "Feedback" ? (
              <Dialog>
                <DialogTrigger className="ml-4 flex w-full items-center justify-start gap-3 [&_svg]:h-6 [&_svg]:w-6">
                  <item.icons size={50} className="text-[#35246F]" />
                  <span className="font-inter text-lg">{item.title}</span>
                </DialogTrigger>
                <FeedbackModal />
              </Dialog>
            ) : (
              <Link href={item.href} target={item.target ? "_blank" : "_self"}>
                <Button
                  variant="ghost"
                  className="flex w-full items-center justify-start gap-3 [&_svg]:h-6 [&_svg]:w-6"
                >
                  <item.icons size={50} className="text-[#35246F]" />
                  <span className="font-inter text-lg">{item.title}</span>
                </Button>
              </Link>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
