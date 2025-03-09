import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export default function HelpModal() {
  return (
    <DialogContent className="w-96">
      <DialogHeader>
        <DialogTitle>Suporte</DialogTitle>
      </DialogHeader>
      <DialogDescription>
        Entre em contato no telefone ou e-mail abaixo se precisar de ajuda.
      </DialogDescription>

      <DialogDescription className="font-bold">
        suporte@cbgpl.com
      </DialogDescription>

      <DialogDescription className="font-bold">
        (85) 9999-8888
      </DialogDescription>
    </DialogContent>
  );
}
