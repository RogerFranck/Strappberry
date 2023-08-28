import Modal from "@/components/Modal";
import React from "react";
import CardShopCar from "./CardShopCar";
import ButtonSecondary from "@/components/buttons/ButtonSecondary";
import { useForm } from "react-hook-form";
import { ProductShopInterface } from "@/redux/context/shopSlice";
import useShop from "@/hooks/useShop";
import { formatCurrency } from "@/utils/format";

interface ShoppinCarProps {
  open: boolean;
  handleClose: () => void;
}

export default function ShoppinCar({ open, handleClose }: ShoppinCarProps) {
  const {
    shopList,
    handleDelete,
    handleChangueIncrement,
    handleChangueDecrement,
    onBuyComplete,
    total,
  } = useShop();
  const {
    control,
    formState: { errors },
  } = useForm();
  return (
    <Modal
      title="Mi carrito"
      open={open}
      handleClose={handleClose}
      background="bg-[#F0F1F5]"
    >
      <div className="overflow-y-scroll max-h-96">
        {shopList.length === 0 && (
          <span className="flex justify-center items-center">
            No hay productos en tu carrito
          </span>
        )}
        {shopList.map((e: ProductShopInterface, i: number) => (
          <CardShopCar
            key={e.id}
            id={e.id}
            href={`/product/${e.id}`}
            icon={e.img}
            title={e.name}
            price={e.price}
            control={control}
            errors={errors}
            name={`cost.${i}`}
            cant={e.cant}
            handleDelete={handleDelete}
            handleChangueIncrement={handleChangueIncrement}
            handleChangueDecrement={handleChangueDecrement}
          />
        ))}
      </div>
      <hr />
      <div className="flex justify-between my-11">
        <span className="font-bold">Total</span>
        <span className="font-bold">{formatCurrency(total)}</span>
      </div>
      <ButtonSecondary onClick={() => onBuyComplete(handleClose)}>
        Comprar ahora
      </ButtonSecondary>
    </Modal>
  );
}
