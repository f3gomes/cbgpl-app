"use client";

import { useEffect, useState } from "react";

import * as z from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

import { phoneMask } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
import ImageContainer from "./image-container";
import {
  formFieldsPersonalDataEdit,
  formFieldsSocialLinks,
} from "../data/list";
import { TooltipQuestion } from "./tooltip-question";
import { updateUser } from "@/actions/updateUser";
import { getUserByEmail } from "@/actions/getUserByEmail";

export interface IProfileImg {
  path: string | undefined;
  profileImgUrl: string | undefined;
}

export default function EditForm() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [profileImg, setProfileImg] = useState<IProfileImg>();

  const fetchUser = async () => {
    if (typeof window !== "undefined") {
      const userFromStorage = await JSON.parse(
        window.localStorage.getItem("gtxp-user")!,
      );

      try {
        setIsLoading(true);
        const userData: any = await getUserByEmail(userFromStorage?.email);
        setUser(userData?.data?.updatedUser);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: user || undefined,
    mode: "onChange",
  });

  useEffect(() => {
    if (user) {
      form.reset(user);
    }
  }, [user, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("submit");
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

    const res: any = await updateUser(data);

    const regex = /unique.*email|email.*unique/i;

    if (res?.status === 201) {
      form?.reset(user);
      router.push("/sign-in");

      toast.message("Cadastro realizado com sucesso!", {
        description: "Seus dados foram enviados",
        position: "top-right",
      });
    }

    if (res?.status === 500 && regex.test(res?.response?.data?.error)) {
      toast.error("Erro ao enviar dados!", {
        description: res?.response?.data?.error as string,
        position: "top-right",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="rounded-lg bg-white p-8 shadow-lg">
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-white p-8 shadow-lg">
      <Form {...form}>
        <ImageContainer profileImg={profileImg} setProfileImg={setProfileImg} />

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <TooltipQuestion />

          <div className="flex flex-col gap-2">
            {formFieldsPersonalDataEdit.map((field: any) => (
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

          <div className="flex flex-col items-center gap-4">
            <Button
              type="submit"
              size={"lg"}
              className="w-[104px] bg-cbgpl-tangerine hover:bg-cbgpl-tangerine-hover active:bg-cbgpl-tangerine-active"
            >
              {form?.formState?.isSubmitting ? <Spinner /> : "Enviar"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
