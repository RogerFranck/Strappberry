/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";
import { Control } from "react-hook-form";
import CounterController from "@/components/CounterController";

interface Props {
  title: string;
  icon: string;
  href: string;
  price?: string;
  errors: any;
  control: Control<any>;
  name: string;
}

export default function CardShopCar({
  icon,
  title,
  price,
  href,
  control,
  errors,
  name,
}: Props) {
  return (
    <div
      className={`w-full max-sm:w-full h-32 bg-[#E0E3F0] p-5 my-5  rounded-md flex flex-row justify-center items-center gap-4 `}
    >
      {icon && (
        <Link href={href}>
          <img src={icon} color="white" width={140} height={50} alt="Product" />
        </Link>
      )}
      <div className="flex flex-col gap-1 justify-start items-start p-2 rounded-md w-full">
        {title && <span className="font-bold text-lg">{title}</span>}
        <div className="flex flex-row justify-between w-full mt-5">
          <span>${price}</span>
          <CounterController control={control} errors={errors} name={name} />
        </div>
      </div>
    </div>
  );
}
