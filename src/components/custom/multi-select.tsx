import React, { useState, useRef, useEffect } from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Option {
  label: string;
  value: string;
}

interface MultiSelectProps {
  options?: Option[];
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  maxItems?: number;
  onChange?: (selectedValues: string[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options = [
    { label: "Inteligência Artificial", value: "ia" },
    { label: "Gestão de Projetos", value: "gp" },
    { label: "Metodologias Ágeis", value: "ma" },
  ],
  placeholder = "Selecione...",
  onChange = () => { },
  className = "",
  disabled = false,
  maxItems = Infinity,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [searchTerm] = useState<string>("");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (selectedValue: string) => {
    if (disabled) return;

    let updatedValue: string[];
    if (selected.includes(selectedValue)) {
      updatedValue = selected.filter((item) => item !== selectedValue);
    } else {
      if (selected.length >= maxItems) return;
      updatedValue = [...selected, selectedValue];
    }
    setSelected(updatedValue);
    onChange(updatedValue);
  };

  const handleRemove = (valueToRemove: string) => {
    if (disabled) return;

    const updatedValue = selected.filter((item) => item !== valueToRemove);
    setSelected(updatedValue);
    onChange(updatedValue);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const selectedCount = selected.length;
  const canSelectMore = selectedCount < maxItems;

  return (
    <div
      className={`relative w-full ${className} ${disabled ? "opacity-50" : ""}`}
      ref={dropdownRef}
    >
      {/* Trigger Button */}
      <Button
        onClick={() => !disabled && setIsOpen(!isOpen)}
        variant="outline"
        className="w-full justify-between hover:bg-gray-50"
        disabled={disabled}
        type="button"
      >
        <span className="truncate">
          {selectedCount === 0
            ? placeholder
            : `${selectedCount} selected${maxItems !== Infinity ? ` (max ${maxItems})` : ""}`}
        </span>
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg">
          {/* Options List */}
          <div className="max-h-64 overflow-auto">
            {filteredOptions.length === 0 ? (
              <div className="p-2 text-center text-sm text-gray-500">
                No options found
              </div>
            ) : (
              filteredOptions.map((option) => {
                const isSelected = selected.includes(option.value);
                const isDisabled = !isSelected && !canSelectMore;

                return (
                  <div
                    key={option.value}
                    className={`flex cursor-pointer items-center px-3 py-2 ${isDisabled ? "cursor-not-allowed opacity-50" : "hover:bg-gray-100"}`}
                    onClick={() => !isDisabled && handleSelect(option.value)}
                  >
                    <div className="mr-2 flex h-4 w-4 items-center justify-center">
                      {isSelected && (
                        <Check className="h-4 w-4 text-blue-500" />
                      )}
                    </div>
                    {option.label}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* Selected Items */}
      <div className="mt-3 flex flex-wrap gap-2">
        {selected.map((value) => {
          const option = options.find((opt) => opt.value === value);
          return (
            <div
              key={value}
              className="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-800"
            >
              {option?.label}
              <button
                type="button"
                disabled={disabled}
                className="ml-1 rounded-full p-1 hover:bg-gray-200"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(value);
                }}
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultiSelect;
