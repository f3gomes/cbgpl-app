// src/app/login/page.tsx

"use client";

import React, { useState } from "react";

import { z } from "zod";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginSchema } from "@/schemas/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Spinner from "@/components/custom/spinner";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogTrigger } from "@/components/ui/dialog";
import ResetModal from "@/components/custom/reset-modal";

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setLoginError(null);
      setIsLoading(true);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        const user = await res.json();
        Cookies.set("gtxp", "logged");
        window.localStorage.setItem("gtxp-user", JSON.stringify(user));
        router.push("/");
      } else {
        const errorData = await res.json();
        setLoginError(errorData.message || "E-mail ou senha incorretos");
      }
    } catch (error) {
      setLoginError("Ocorreu um erro. Por favor, tente novamente mais tarde");
      console.log(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Lado Esquerdo */}
      <div
        className="relative hidden w-1/2 items-center justify-center bg-cover bg-center p-8 md:flex"
        style={{
          backgroundImage: `linear-gradient(rgba(71, 29, 195, 0.7), rgba(71, 29, 195, 0.7)), url('/assets/images/Fortaleza.png')`,
        }}
      >
        <Image
          src="/assets/logos/logo.png"
          alt="Logo do App"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      {/* Lado Direito - Formulário de Login */}
      <div className="flex w-full items-center justify-center bg-slate-200 p-8 md:w-1/2">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-center text-2xl font-bold text-orange-500">
            Login
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Campo de E-mail */}
            <div className="mb-4">
              <Label htmlFor="email" className="text-orange-500">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seuemail@exemplo.com"
                {...register("email")}
                className={`mt-1 block w-full ${errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Campo de Senha */}
            <div className="mb-4">
              <Label htmlFor="password" className="text-orange-500">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                {...register("password")}
                className={`mt-1 block w-full ${errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500`}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            {loginError && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{loginError}</AlertDescription>
              </Alert>
            )}

            <div className="mb-4 text-right">
              <Dialog>
                <DialogTrigger className="text-sm text-orange-500 hover:underline">
                  Esqueceu a senha?
                </DialogTrigger>
                <ResetModal />
              </Dialog>
            </div>

            {/* Botão de Login */}
            <Button
              type="submit"
              className="w-full bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700"
              disabled={isLoading}
            >
              {isLoading ? <Spinner /> : "Entrar"}
            </Button>
          </form>

          {/* Link de Cadastro */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Não possui cadastro ainda?{" "}
              <Link href="/sign-up" className="text-orange-500 hover:underline">
                Crie sua conta
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
