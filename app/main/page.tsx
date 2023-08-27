"use client";
import SideBar from "@/components/SideBar";
import React from "react";
import useMain from "./hooks/useMain";
import Category from "@/components/Category";
import Card from "@/components/Card";

export default function Main() {
  const { itemsSideBar, categoryArray, rows } = useMain();
  return (
    <SideBar tittle="Hola Roger" items={itemsSideBar} clientMenu>
      <div className="p-5 px-44 w-full max-sm:p-5 ">
        <span>Agrega a tu carrito los artículos que deseas comprar</span>
        <Category items={categoryArray} />
        <br />
        <div className="flex flex-row flex-wrap gap-10 mt-10 max-sm:justify-center ">
          {rows.map((e, i) => (
            <Card
              href="/"
              icon={e.img}
              key={i}
              title={e.name}
              price={`$${e.price}`}
            />
          ))}
        </div>
      </div>
    </SideBar>
  );
}
