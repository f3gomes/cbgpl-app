import { sideIcons, socialIcons } from "../data/list";
import { Button } from "../ui/button";

interface AsideProps {
  socialIcons: typeof socialIcons;
  sideIcons: typeof sideIcons;
}

export default function AsideLeft({ socialIcons, sideIcons }: AsideProps) {
  return (
    <aside className="flex h-12 w-full flex-col items-center rounded-2xl bg-white px-4 shadow-md xl:h-[600px] xl:w-[330px] xl:p-4 xl:px-0">
      <div className="mt-2 flex w-full justify-between xl:mt-0">
        {socialIcons.map((Item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="[&_svg]:h-7 [&_svg]:w-7"
          >
            <Item size={64} className="text-[#35246F]" />
          </Button>
        ))}
      </div>

      <div className="hidden xl:block">
        {sideIcons.map((Item, index) => (
          <div key={index}>
            <hr className="my-4 border-gray-300" />
            <Button
              variant="ghost"
              className="flex w-full items-center justify-start gap-3 [&_svg]:h-6 [&_svg]:w-6"
            >
              <Item.icons size={50} className="text-[#35246F]" />
              <span className="font-inter text-lg">{Item.title}</span>
            </Button>
          </div>
        ))}
      </div>
    </aside>
  );
}
