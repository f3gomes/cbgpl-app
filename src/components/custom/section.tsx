import { Images, UserSearch } from "lucide-react";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function Section() {
  return (
    <section className="flex min-w-[700px] flex-col items-center">
      <Card className="h-[160px] w-full rounded-2xl p-4 shadow-md">
        <div className="mt-1 flex items-center gap-4">
          <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#F3F3F3]"></div>
          <Input
            placeholder="Compartilhe uma publicação"
            className="h-[72px] w-[537px] flex-grow rounded-3xl bg-[#F3F3F3]"
          />
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <Button variant="outline" className="[&_svg]:h-6 [&_svg]:w-6">
            <Images size={16} className="text-[#35246F]" />
            Mídia
          </Button>
          <Button variant="outline" className="[&_svg]:h-6 [&_svg]:w-6">
            <UserSearch size={16} className="text-[#35246F]" />
            Marcar pessoas
          </Button>
        </div>
      </Card>

      <Card className="mt-6 w-full flex-grow rounded-2xl bg-[#FFFFFF] p-4 shadow-inner">
        <CardHeader>
          <CardTitle>Postagens Recentes</CardTitle>
          <CardDescription>
            Aqui você encontrará as últimas atualizações do Congresso.
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </section>
  );
}
