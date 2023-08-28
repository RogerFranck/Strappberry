import Card from "@/components/Card";
import useShop from "@/hooks/useShop";
import { Productpayload } from "@/redux/context/productSlice";
import { formatCurrency } from "@/utils/format";
import { Skeleton } from "@mui/material";
import React from "react";
import usePaginationMain from "../hooks/usePaginationMain";

interface CardListProps {
  products: Productpayload[];
  isLoadingProducts: boolean;
}

export default function CardList({
  products,
  isLoadingProducts,
}: CardListProps) {
  const { handleAddShopList } = useShop();
  return (
    <>
      {isLoadingProducts
        ? [0, 0, 0].map((_, i) => (
            <Skeleton key={i} variant="rounded" width={208} height={288} />
          ))
        : products.map((e: Productpayload, i: number) => (
            <Card
              href={`/product/${e.id}`}
              icon={e.img}
              key={i}
              title={e.name}
              price={formatCurrency(e.price)}
              onClick={() => handleAddShopList(e)}
            />
          ))}
    </>
  );
}
