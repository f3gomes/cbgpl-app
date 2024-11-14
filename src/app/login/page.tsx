// src/app/login/page.tsx

"use client";

import React, { useState } from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginSchema } from "@/schemas/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const [loginError, setLoginError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (data: LoginFormValues) => {
    setLoginError(null);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        // Redireciona para a página
        router.push("/restrict");
      } else {
        const errorData = await res.json();
        setLoginError(errorData.message || "E-mail ou senha incorretos");
      }
    } catch (error) {
      setLoginError("Ocorreu um erro. Por favor, tente novamente.");
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Lado Esquerdo - Logo e Fundo */}
      <div className="bg-cbgpl-aqua hidden w-1/2 items-center justify-center p-8 md:flex">
        <Image
          src="/assets/logo.png"
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
                className={`mt-1 block w-full ${
                  errors.email ? "border-red-500" : "border-gray-300"
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
                className={`mt-1 block w-full ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500`}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Mensagem de Erro de Login */}
            {loginError && (
              <Alert variant="destructive" className="mb-4">
                <AlertTitle>Erro de Login</AlertTitle>
                <AlertDescription>{loginError}</AlertDescription>
              </Alert>
            )}

            {/* Link "Esqueceu a senha?" */}
            <div className="mb-4 text-right">
              <Link
                href="/recuperar-senha"
                className="text-sm text-orange-500 hover:underline"
              >
                Esqueceu a senha?
              </Link>
            </div>

            {/* Botão de Login */}
            <Button
              type="submit"
              className="w-full bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Entrando..." : "Entrar"}
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
