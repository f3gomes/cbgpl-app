"use client";

import { resetUserPassword } from "@/actions/resetUserPass";
import Spinner from "@/components/custom/spinner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { resetSchema } from "@/schemas/reseet-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

interface ResetPageProps {
  params: {
    id: string;
  };
}

const defaultValues = {
  password: "",
  confirmPassword: "",
};

const ResetPage = ({ params: { id } }: ResetPageProps) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof resetSchema>>({
    resolver: zodResolver(resetSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = async (values: z.infer<typeof resetSchema>) => {
    // eslint-disable-next-line
    const { confirmPassword, ...rest } = values;

    const res: any = await resetUserPassword(id, rest);

    if (res?.status === 201) {
      form?.reset(defaultValues);
      router.push("/sign-in");

      toast.message("Senha alterada com sucesso!", {
        description: "Seus dados foram enviados",
        position: "top-right",
      });
    } else {
      toast.message("Erro ao enviar dados!", {
        description: "Seus não dados foram enviados",
        position: "top-right",
      });
    }
  };

  return (
    <>
      <div className="flex min-h-screen w-full bg-gray-50">
        <main className="mx-auto flex w-full flex-grow justify-center gap-2 p-4 xl:flex-row">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-cbgpl-tangerine">
                  Digite uma nova senha
                </h1>

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Senha<span className="text-red-600">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="********"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Confirmar Senha<span className="text-red-600">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="********"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col items-center gap-4">
                <Button
                  type="submit"
                  size={"lg"}
                  disabled={
                    !form?.formState?.isValid || form?.formState?.isSubmitting
                  }
                  className="w-[104px] bg-cbgpl-tangerine hover:bg-cbgpl-tangerine-hover active:bg-cbgpl-tangerine-active"
                >
                  {form?.formState?.isSubmitting ? <Spinner /> : "Enviar"}
                </Button>
              </div>
            </form>
          </Form>
        </main>
      </div>
    </>
  );
};

export default ResetPage;
