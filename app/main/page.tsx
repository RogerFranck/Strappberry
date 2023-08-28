"use client";
import SideBar from "@/components/SideBar";
import React from "react";
import useMain from "./hooks/useMain";
import Category from "@/components/Category";
import CardList from "./components/CardList";

export default function Main() {
  const {
    itemsSideBar,
    category,
    isLoadingCategory,
    products,
    isLoadingProducts,
    categorySelected,
    setcategorySelected,
  } = useMain();
  return (
    <SideBar tittle="Hola Roger" items={itemsSideBar} clientMenu>
      <div className="p-5 px-44 w-full max-sm:p-5 ">
        <span>Agrega a tu carrito los artículos que deseas comprar</span>
        <Category
          items={category}
          isLoading={isLoadingCategory}
          categorySelected={categorySelected}
          setcategorySelected={setcategorySelected}
        />
        <br />
        <div className="flex flex-row flex-wrap gap-10 mt-10 max-sm:justify-center ">
          <CardList products={products} isLoadingProducts={isLoadingProducts} />
        </div>
      </div>
    </SideBar>
  );
}
