/* eslint-disable @next/next/no-img-element */
import TextInputController from "@/components/TextInputController";
import React from "react";
import useProductAdd from "../hooks/useProductAdd";
import {
  isRequired,
  maxLengthValidation,
  isMoneyField,
} from "@/utils/validations";
import ButtonForm from "@/components/buttons/ButtonForm";
import TextAreaController from "@/components/TextAreaController";
import FileInputController from "@/components/FileInputController";
import SelectInputController from "@/components/SelectInputController";

interface ProductAddInterface {
  onClose: () => void;
  row?: any;
}

export default function ProductAdd({ onClose, row }: ProductAddInterface) {
  const {
    control,
    handleSubmit,
    errors,
    handleSaveProduct,
    options,
    isLoadingCategory,
    isImgSelected,
  } = useProductAdd({
    onClose,
    row,
  });

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
      <SelectInputController
        name="category"
        control={control}
        label="* Categoría"
        rules={isRequired}
        errors={errors}
        options={isLoadingCategory ? [] : options}
      />
      <TextAreaController
        name="description"
        control={control}
        label="* Descripcíon"
        rules={{ ...isRequired, ...maxLengthValidation(250) }}
        errors={errors}
      />
      <FileInputController
        name="img"
        label="Subir imagen"
        accept="image/*"
        control={control}
        errors={errors}
      />
      {isImgSelected && (
        <img
          src={row.img}
          alt="Previsualización"
          className="mt-2 rounded-md max-h-40"
        />
      )}
      <ButtonForm onClose={onClose} />
    </form>
  );
}
