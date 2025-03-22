import Link from "next/link";
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
        Entre em contato pelo e-mail abaixo se precisar de ajuda.
      </DialogDescription>

      <DialogDescription className="font-bold">
        <Link href={"mailto:suportecbgpl@pmice.org.br"}>
          suportecbgpl@pmice.org.br
        </Link>
      </DialogDescription>

      {/* <DialogDescription className="font-bold">
        (85) 9999-8888
      </DialogDescription> */}
    </DialogContent>
  );
}
