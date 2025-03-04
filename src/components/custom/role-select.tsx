"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";

interface RoleSelectProps {
  name: string;
  control: any;
  options: string[];
}

const RoleSelect: React.FC<RoleSelectProps> = ({
  name,
  control,
  options = [
    "Diretor",
    "Gerente",
    "Coordenador",
    "Analista",
    "Assistente",
    "Estagiário",
    "Outros",
  ],
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select onValueChange={field.onChange} value={field.value}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione uma cargo" />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  );
};

export default RoleSelect;
