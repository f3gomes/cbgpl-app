"use client";

import { useState } from "react";

import * as z from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

import Link from "next/link";
import { phoneMask } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createUser } from "@/actions/createUser";
import { formSchema } from "@/schemas/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadImage } from "@/actions/imageKitUpload";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import Spinner from "./spinner";
import PrivacyAgreement from "./terms-modal";
import ImageContainer from "./image-container";
import { formFieldsPersonalData, formFieldsSocialLinks } from "../data/list";

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
  pmiId: "",
  password: "",
  confirmPassword: "",
  visible: true,
  type: "CONGRESSMAN",
  profileImgUrl: "",
};

export interface IProfileImg {
  path: string | undefined;
  profileImgUrl: string | undefined;
}

export default function SignUpForm() {
  const router = useRouter();

  const [profileImg, setProfileImg] = useState<IProfileImg>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    let data = null;
    let image = null;

    // eslint-disable-next-line
    const { confirmPassword, ...rest } = values;

    if (profileImg) {
      image = await uploadImage(profileImg?.path);
      data = { ...rest, profileImgUrl: image?.filePath };
    } else {
      data = { ...rest };
    }

    const res: any = await createUser(data);

    const regex = /unique.*email|email.*unique/i;

    if (res?.status === 201) {
      form?.reset(defaultValues);
      router.push("/sign-in");

      toast.message("Cadastro realizado com sucesso!", {
        description: "Seus dados foram enviados",
        position: "top-right",
      });
    }

    if (res?.status === 500 && regex.test(res?.response?.data?.error)) {
      toast.error("Erro ao efetuar cadastro!", {
        description: "Esse endereço de e-mail já foi cadastrado",
        position: "top-right",
      });
    }
  };

  return (
    <div className="w-[25rem] rounded-lg bg-white p-8 shadow-lg md:w-[34rem]">
      <Form {...form}>
        <h1 className="mb-6 text-center text-2xl font-bold">Crie sua conta</h1>

        <ImageContainer profileImg={profileImg} setProfileImg={setProfileImg} />

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col gap-2">
            {formFieldsPersonalData.map((field: any) => (
              <div key={field.name}>
                {field.name === "phone" ? (
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Número de Telefone
                          <span className="text-red-600">*</span>
                        </FormLabel>
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
                ) : (
                  <FormField
                    key={field.name}
                    control={form.control}
                    name={field.name}
                    render={({ field: formFieldProps }) => (
                      <FormItem className={field.className}>
                        <FormLabel>
                          {field.label}
                          {field.required && (
                            <span className="text-red-600">*</span>
                          )}
                        </FormLabel>

                        <FormControl>
                          <field.component
                            placeholder={field.props.placeholder}
                            {...formFieldProps}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-cbgpl-tangerine">
              Redes Sociais
            </h1>

            {/* eslint-disable-next-line */}
            {formFieldsSocialLinks.map((field: any) => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name}
                render={({ field: formFieldProps }) => (
                  <FormItem className={field.className}>
                    <FormLabel>{field.label}</FormLabel>

                    <FormControl>
                      <field.component
                        placeholder={field.props.placeholder}
                        {...formFieldProps}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-cbgpl-tangerine">Credenciais</h1>

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Senha<span className="text-red-600">*</span>
                  </FormLabel>
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
                  <FormLabel>
                    Confirmar Senha<span className="text-red-600">*</span>
                  </FormLabel>
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
              disabled={
                !form?.formState?.isValid || form?.formState?.isSubmitting
              }
              className="w-[104px] bg-cbgpl-tangerine hover:bg-cbgpl-tangerine-hover active:bg-cbgpl-tangerine-active"
            >
              {form?.formState?.isSubmitting ? <Spinner /> : "Enviar"}
            </Button>

            <Link
              href="/sign-in"
              className="text-orange-500 transition duration-200 hover:underline"
            >
              Já sou cadastrado
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
