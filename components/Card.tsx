/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";
import ButtonPrimary from "./buttons/ButtonPrimary";

interface Props {
  title: string;
  icon: string;
  href: string;
  price?: string;
}

export default function Card({ icon, title, price, href }: Props) {
  return (
    <Link
      href={href}
      className={`w-52 max-sm:w-full h-72 bg-gray-300  p-5 rounded-md flex flex-col justify-center items-center gap-4 `}
    >
      {icon && (
        <img src={icon} color="white" width={140} height={50} alt="Product" />
      )}
      <div className="flex flex-col gap-1 justify-center items-center bg-[white] p-2 rounded-md w-full">
        {title && <span>{title}</span>}
        {price && <span>{price}</span>}
      </div>
      <ButtonPrimary onClick={() => alert("Hola")}>Agregar</ButtonPrimary>
    </Link>
  );
}
