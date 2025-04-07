import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export function PopoverMaterial() {
  return (
    <Popover>
      <PopoverTrigger className="flex items-center justify-center overflow-hidden whitespace-nowrap rounded-[21px] border border-orange-400 bg-white px-12 text-base font-semibold text-[#1B1B1B] sm:text-lg md:text-xl">
        Material
      </PopoverTrigger>
      <PopoverContent className="absolute -mt-28 -ml-32">
        <p className="text-center text-base">Material não disponível</p>
      </PopoverContent>
    </Popover>
  );
}
