"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";

interface VisibleSelectProps {
  name: string;
  control: any;
}

const VisibleSelect: React.FC<VisibleSelectProps> = ({ name, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          onValueChange={(value) => field.onChange(value === "true")}
          value={field.value !== undefined ? String(field.value) : ""}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecione uma cargo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="true" className="select-none">
              SIM
            </SelectItem>
            <SelectItem value="false" className="select-none">
              NÃO
            </SelectItem>
          </SelectContent>
        </Select>
      )}
    />
  );
};

export default VisibleSelect;
