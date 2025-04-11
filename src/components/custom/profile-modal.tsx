import { DialogTitle } from "@radix-ui/react-dialog";
import { DialogContent } from "../ui/dialog";
import EditForm from "./edit-form";

export interface EditModalProps {
  setOpen: (open: boolean) => void
}

export default function ProfileModal({ setOpen }: EditModalProps) {
  return (
    <DialogContent className="h-full overflow-y-auto">
      <DialogTitle>
        <h1 className="mb-6 text-center text-2xl font-bold">
          Atualize seus dados
        </h1>
      </DialogTitle>
      <EditForm setOpen={setOpen} />
    </DialogContent>
  );
}
