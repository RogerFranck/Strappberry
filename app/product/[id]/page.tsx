/* eslint-disable @next/next/no-img-element */
"use client";
import SideBar from "@/components/SideBar";
import React from "react";
import useProductDetail from "./hooks/useProductDetail";
import ButtonSecondary from "@/components/buttons/ButtonSecondary";

export default function ProductDetail() {
  const { itemsSideBar, product } = useProductDetail();
  return (
    <SideBar clientMenu tittle="Hola Roger" items={itemsSideBar}>
      <div className="flex flex-row m-10 justify-between items-center mt-32">
        <div className="w-[40%] flex justify-end">
          <img
            src={product.img}
            alt={`productImg-${product.name}`}
            className="w-[70%]"
          />
        </div>
        <div className="w-[60%] flex flex-col items-center justify-center">
          <span className="font-bold text-[50px]"> {product.name} </span>
          <span className="text-gray-400 font-semibold">${product.price}</span>
          <span className="w-1/2 my-12"> {product.description} </span>
          <ButtonSecondary size="w-[300px]">Agregar</ButtonSecondary>
        </div>
      </div>
    </SideBar>
  );
}
