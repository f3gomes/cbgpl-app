import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleHelp } from "lucide-react";

export function TooltipQuestion() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <CircleHelp size={20} className="text-slate-600 absolute ml-11" />
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-center text-base">
            Ao permitir, seu perfil ficará disponível para os outros <br />
            participantes além de ganhar permissão para criar novas postagens.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
