import Modal from "@/components/Modal";
import React from "react";
import useShopCar from "./hooks/useShopCar";
import CardShopCar from "./CardShopCar";
import ButtonSecondary from "@/components/buttons/ButtonSecondary";
import { useForm } from "react-hook-form";

interface ShoppinCarProps {
  open: boolean;
  handleClose: () => void;
}

export default function ShoppinCar({ open, handleClose }: ShoppinCarProps) {
  const { product } = useShopCar();
  const {
    control,
    watch,
    formState: { errors },
  } = useForm();
  console.log(watch("cost"));
  return (
    <Modal
      title="Mi carrito"
      open={open}
      handleClose={handleClose}
      background="bg-[#F0F1F5]"
    >
      <div className="overflow-y-scroll max-h-96">
        {product.map((e, i) => (
          <CardShopCar
            key={e.id}
            href={`/product/${e.id}`}
            icon={e.img}
            title={e.name}
            price={e.price}
            control={control}
            errors={errors}
            name={`cost.${i}`}
          />
        ))}
      </div>
      <hr />
      <div className="flex justify-between my-11">
        <span className="font-bold">Total</span>
        <span className="font-bold">$420</span>
      </div>
      <ButtonSecondary>Comprar ahora</ButtonSecondary>
    </Modal>
  );
}
