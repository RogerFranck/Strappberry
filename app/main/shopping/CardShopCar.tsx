/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";
import { Control } from "react-hook-form";
import CounterController from "@/components/CounterController";
import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { formatCurrency } from "@/utils/format";

interface Props {
  title: string;
  id: number;
  icon: string;
  href: string;
  price: number;
  errors: any;
  control: Control<any>;
  name: string;
  cant: number;
  handleDelete: (id: number) => void;
  handleChangueIncrement: (id: number) => void;
  handleChangueDecrement: (id: number) => void;
}

export default function CardShopCar({
  id,
  icon,
  title,
  price,
  href,
  control,
  errors,
  name,
  cant,
  handleDelete,
  handleChangueIncrement,
  handleChangueDecrement,
}: Props) {
  return (
    <div
      className={`w-full h-32 bg-[#E0E3F0] p-5 my-5  rounded-md flex flex-row justify-center items-center gap-4 max-sm:flex-col max-sm:h-auto`}
    >
      {icon && (
        <Link href={href}>
          <img src={icon} color="white" width={140} height={50} alt="Product" />
        </Link>
      )}
      <div className="flex flex-col gap-1 justify-start items-start p-2 rounded-md w-full">
        <div className="flex flex-row justify-between w-full items-center">
          {title && <span className="font-bold text-lg">{title}</span>}
          <IconButton onClick={() => handleDelete(id)}>
            <ClearIcon />
          </IconButton>
        </div>
        <div className="flex flex-row justify-between w-full mt-5 items-center max-sm:flex-col">
          <span>{formatCurrency(price)}</span>
          <CounterController
            control={control}
            errors={errors}
            name={name}
            cant={cant}
            className="w-[80px]"
            onIncrement={() => handleChangueIncrement(id)}
            onDecrement={() => handleChangueDecrement(id)}
          />
        </div>
      </div>
    </div>
  );
}
