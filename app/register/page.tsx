"use client";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import TextInputController from "@/components/TextInputController";
import ButtonSubmit from "@/components/buttons/ButtonSubmit";
import Link from "next/link";
import useSignUp from "./hooks/useSignUp";
import { SignUpInterface } from "./interface/signUpInterface";
import {
  isRequired,
  passwordFieldValidation,
  maxLengthValidation,
  emailFieldValidation,
} from "@/utils/validations";

export default function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpInterface>();
  const { handleSignUp, confirmPasswordValidation } = useSignUp({ watch });
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <Image
        src="/logo-strappberry.png"
        width={240}
        height={61}
        alt="logoMain"
      />
      <div
        className={`bg-[#F0F1F5] p-10 py-24 my-10 rounded-md max-sm:w-[90%] md:w-1/2 lg:w-1/3 justify-center items-center`}
      >
        <form onSubmit={handleSubmit(handleSignUp)}>
          <TextInputController
            name="name"
            control={control}
            label="* Nombre"
            errors={errors}
            rules={{ ...isRequired, ...maxLengthValidation(50) }}
          />
          <TextInputController
            name="email"
            control={control}
            label="* Email"
            errors={errors}
            rules={emailFieldValidation}
          />
          <TextInputController
            name="password"
            control={control}
            label="* Contraseña"
            errors={errors}
            rules={passwordFieldValidation}
          />
          <TextInputController
            name="repassword"
            control={control}
            label="* Confirmar contraseña"
            errors={errors}
            rules={{
              ...passwordFieldValidation,
              validate: confirmPasswordValidation,
            }}
          />
          <ButtonSubmit>Ingresar</ButtonSubmit>
        </form>

        <div className="flex flex-col justify-center items-center gap-3">
          <span>¿Ya tienes cuenta?</span>
          <Link
            href="/login"
            className="cursor-pointer text-[#353C59] font-bold"
          >
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
