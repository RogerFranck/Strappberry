"use client";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import TextInputController from "@/components/TextInputController";
import ButtonSubmit from "@/components/buttons/ButtonSubmit";
import useSignIn from "./hooks/useSignIn";
import Link from "next/link";
import { emailFieldValidation, isRequired } from "@/utils/validations";
import { SignInInterface } from "./interface/SignInInterface";

export default function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInterface>();

  const { handleSignIn } = useSignIn();

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-[#353C59]">
      <Image
        src="/logo-strappberry.png"
        width={240}
        height={61}
        alt="logoMain"
      />
      <div
        className={`bg-[#F0F1F5] p-10 py-24 my-10 rounded-md max-sm:w-[90%] md:w-1/2 lg:w-1/3 justify-center items-center`}
      >
        <form onSubmit={handleSubmit(handleSignIn)}>
          <TextInputController
            name="email"
            rules={emailFieldValidation}
            control={control}
            label="Email"
            errors={errors}
          />
          <TextInputController
            name="password"
            control={control}
            label="Contraseña"
            rules={isRequired}
            isSecret
            errors={errors}
          />
          <ButtonSubmit>Ingresar</ButtonSubmit>
        </form>

        <div className="flex flex-col justify-center items-center gap-3">
          <span>¿Aún no tienes cuenta?</span>
          <Link
            href="/register"
            className="cursor-pointer text-[#353C59] font-bold"
          >
            Registrate
          </Link>
          <span className="mt-10">
            Roger Almeyda Ramos |{" "}
            <Link href="mailto:RogerAlmeydaRamos@outlook.com">
              RogerAlmeydaRamos@outlook.com
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
