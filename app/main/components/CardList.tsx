import Card from "@/components/Card";
import { Productpayload } from "@/redux/context/productSlice";
import { Skeleton } from "@mui/material";
import React from "react";

interface CardListProps {
  products: Productpayload[];
  isLoadingProducts: boolean;
}

export default function CardList({
  products,
  isLoadingProducts,
}: CardListProps) {
  return (
    <>
      {isLoadingProducts
        ? [0, 0, 0].map((_, i) => (
            <Skeleton key={i} variant="rounded" width={208} height={288} />
          ))
        : products.map((e: Productpayload, i: number) => (
            <Card
              href="/"
              icon={e.img}
              key={i}
              title={e.name}
              price={`$${e.price}`}
            />
          ))}
    </>
  );
}
