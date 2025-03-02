"use client";

import { z } from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/custom/spinner";
import { resetSchema } from "@/schemas/reseet-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetUserPassword } from "@/actions/resetUserPass";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useEffect, useState } from "react";
import { getUserById } from "@/actions/getUserById";

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
  const [token, setToken] = useState("");

  const form = useForm<z.infer<typeof resetSchema>>({
    resolver: zodResolver(resetSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = async (values: z.infer<typeof resetSchema>) => {
    // eslint-disable-next-line
    const { confirmPassword, ...rest } = values;
    const { password } = rest;

    const res: any = await resetUserPassword(id, { password, token });

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

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const data: any = await getUserById(id);

        if (data?.response?.data?.message) {
          console.log(data?.response?.data?.message);
        }

        if (data?.data?.updatedUser) {
          setToken(data?.data?.updatedUser?.resetToken);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchToken();
  }, [id]);

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

                <div className="flex flex-col gap-6">
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
                            className="w-60"
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
                            className="w-60"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
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
