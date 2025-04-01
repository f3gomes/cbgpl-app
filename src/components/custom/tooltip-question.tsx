import { CircleHelp } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";

interface TooltipQuestionProps {
  className?: string;
}

export function TooltipQuestion({ className }: TooltipQuestionProps) {
  return (
    <div className={cn("absolute -mt-4", className)}>
      <Popover>
        <PopoverTrigger>
          <CircleHelp size={20} className="absolute ml-11 text-slate-600" />
        </PopoverTrigger>
        <PopoverContent className="absolute ml-16">
          <p className="text-center text-base">
            Ao permitir, seu perfil ficará disponível para os outros <br />
            participantes além de ganhar permissão para criar novas postagens.
          </p>
        </PopoverContent>
      </Popover>
    </div>
  );
}
