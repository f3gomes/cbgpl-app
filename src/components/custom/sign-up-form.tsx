"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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

import { formSchema } from "@/schemas/form-schema";
import MultiSelect from "./multi-select";
import { phoneMask } from "@/lib/utils";
import Link from "next/link";
import PrivacyAgreement from "./terms-modal";
import { toast } from "sonner";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  role: "",
  company: "",
  areas: [],
  linkedin: "",
  instagram: "",
  twitter: "",
  idPmi: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    toast.message("Cadastro realizado com sucesso!", {
      description: "Seus dados foram enviados.",
      position: "top-right",
    });
  }

  return (
    <div className="w-[28rem] rounded-lg bg-white p-8 shadow-lg md:w-[34rem]">
      <Form {...form}>
        <h1 className="mb-6 text-center text-2xl font-bold">Crie sua conta</h1>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">Dados Pessoais</h1>
            <FormField
              control={form.control}
              name="idPmi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID PMI</FormLabel>
                  <FormControl>
                    <Input placeholder="Identificação do PMI" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome Completo *</FormLabel>
                  <FormControl>
                    <Input placeholder="João da Silva" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail *</FormLabel>
                  <FormControl>
                    <Input placeholder="joao@exemplo.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número de Telefone *</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="(11) 98765-4321"
                      onChange={(e) =>
                        field.onChange(phoneMask(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cargo</FormLabel>
                  <FormControl>
                    <Input placeholder="Gerente" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organização</FormLabel>
                  <FormControl>
                    <Input placeholder="Empresa XYZ" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="areas"
              render={({ field }) => (
                <FormItem className="relative z-10">
                  <FormLabel>Áreas de Interesse *</FormLabel>
                  <FormControl>
                    <MultiSelect {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">Redes Sociais</h1>

            <FormField
              control={form.control}
              name="linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Linkedin</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://www.linkedin.com/in/"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="instagram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://www.instagram.com/"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="twitter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Twitter</FormLabel>
                  <FormControl>
                    <Input placeholder="https://x.com/" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">Credenciais</h1>

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha *</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
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
                  <FormLabel>Confirmar Senha *</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            <PrivacyAgreement />

            <Button
              type="submit"
              size={"lg"}
              disabled={!form?.formState?.isValid}
              className="bg-cbgpl-tangerine hover:bg-cbgpl-tangerine-hover active:bg-cbgpl-tangerine-active"
            >
              Enviar
            </Button>

            <Link
              href={"/login"}
              className="text-sm transition duration-200 hover:text-blue-800"
            >
              Já sou cadastrado
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
