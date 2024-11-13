import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const PrivacyAgreement: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="inline-block">
        <span className="text-sm">Ao clicar em Enviar Cadastro você concorda com as </span>
        <Button variant="link">Políticas de Privacidade</Button>
      </DialogTrigger>

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
