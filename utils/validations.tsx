export const isRequired = { required: "Campo obligatorio" };

export const isMoneyField = {
  pattern: {
    value: /^(\d{1,3}(,\d{3})*|\d+)(\.\d+)?$/,
    message: "Valor inválido. Debe ser un monto válido de moneda.",
  },
};

export const maxLengthValidation = (maxValue: number) => ({
  maxLength: {
    value: maxValue,
    message: `El campo debe tener maximo ${maxValue} caracteres`,
  },
});

export const minLengthValidation = (minValue: number) => ({
  maxLength: {
    value: minValue,
    message: `El campo debe tener minimo ${minValue} caracteres`,
  },
});

export const emailFieldValidation = {
  ...isRequired,
  pattern: {
    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    message: "Email invalido",
  },
};

export const passwordFieldValidation = {
  ...isRequired,
  minLength: {
    value: 8,
    message: "La contraseña debe tener al menos 8 caracteres",
  },
};
