import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PrivacyAgreement: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="gap-1 text-sm text-center">
        <span>Ao clicar em Enviar você concorda com as </span>
        <DialogTrigger className="transition duration-200 hover:underline">
          Políticas de Privacidade
        </DialogTrigger>
      </div>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Políticas de Privacidade</DialogTitle>
        </DialogHeader>

        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nisl nec ultricies lacus, nisl nec nisl nec nisl. Sed euismod, nisl
          nec ultricies lacus, nisl nec nisl nec nisl. Sed euismod, nisl nec
          ultricies lacus, nisl nec nisl nec nisl.
        </p>

        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nisl nec ultricies lacus, nisl nec nisl nec nisl. Sed euismod, nisl
          nec ultricies lacus, nisl nec nisl nec nisl. Sed euismod, nisl nec
          ultricies lacus, nisl nec nisl nec nisl.
        </p>

        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nisl nec ultricies lacus, nisl nec nisl nec nisl. Sed euismod, nisl
          nec ultricies lacus, nisl nec nisl nec nisl. Sed euismod, nisl nec
          ultricies lacus, nisl nec nisl nec nisl.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyAgreement;
