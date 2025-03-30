import { DialogTitle } from "@radix-ui/react-dialog";
import { DialogContent } from "../ui/dialog";
import EditForm from "./edit-form";

export default function ProfileModal() {
  return (
    <DialogContent className="h-full overflow-y-auto">
      <DialogTitle>
        <h1 className="mb-6 text-center text-2xl font-bold">
          Atualize seus dados
        </h1>
      </DialogTitle>
      <EditForm />
    </DialogContent>
  );
}
