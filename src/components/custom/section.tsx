import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import PostForm from "./post-form";

export default function Section() {
  return (
    <section className="flex w-full flex-col items-center xl:max-w-[700px]">
      <PostForm />

      <Card className="mt-2 w-full flex-grow rounded-2xl bg-[#FFFFFF] p-4 shadow-inner">
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
