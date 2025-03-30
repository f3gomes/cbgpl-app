import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export function PopoverFotos() {
  return (
    <div className="absolute -mt-4">
      <Popover>
        <PopoverTrigger>
          <div className="absolute -mt-3 text-base font-medium text-black transition duration-200 hover:text-slate-700">
            Fotos
          </div>
        </PopoverTrigger>
        <PopoverContent className="absolute">
          <p className="text-center text-base">
            Link será disponibilizado em breve
          </p>
        </PopoverContent>
      </Popover>
    </div>
  );
}
