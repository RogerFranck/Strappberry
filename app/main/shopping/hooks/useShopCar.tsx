import useShop from "@/hooks/useShop";
import React from "react";

export default function useShopCar() {
  const { shopList } = useShop();
  return {
    shopList,
  };
}
