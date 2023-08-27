import TextInputController from "@/components/TextInputController";
import React from "react";
import { useForm } from "react-hook-form";
import useProductAdd from "../hooks/useProductAdd";
import {
  isRequired,
  maxLengthValidation,
  isMoneyField,
} from "@/utils/validations";
import ButtonForm from "@/components/buttons/ButtonForm";
import TextAreaController from "@/components/TextAreaController";
import FileInputController from "@/components/FileInputController";

interface ProductAddInterface {
  onClose: () => void;
}

export default function ProductAdd({ onClose }: ProductAddInterface) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { handleSaveProduct } = useProductAdd();
  return (
    <form onSubmit={handleSubmit(handleSaveProduct)}>
      <TextInputController
        name="name"
        rules={{ ...isRequired, ...maxLengthValidation(25) }}
        control={control}
        label="* Nombre"
        errors={errors}
      />
      <TextInputController
        name="price"
        control={control}
        label="* Precio"
        rules={{ ...isRequired, ...isMoneyField }}
        errors={errors}
      />
      <TextInputController
        name="category"
        control={control}
        label="* Categoría"
        rules={isRequired}
        errors={errors}
      />
      <TextAreaController
        name="description"
        control={control}
        label="* Descripcíon"
        rules={{ ...isRequired, ...maxLengthValidation(250) }}
        errors={errors}
      />
      <FileInputController
        name="image"
        label="Subir imagen"
        accept="image/*"
        control={control}
        rules={isRequired}
        errors={errors}
      />
      <ButtonForm onClose={onClose} />
    </form>
  );
}
