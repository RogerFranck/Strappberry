import React from "react";
import { Controller, Control, FieldError } from "react-hook-form";

interface SwitchInputProps {
  name: string;
  label: string;
  control: Control<any>;
  errors: any;
}

export default function SwitchInputController({
  name,
  label,
  control,
  errors,
}: SwitchInputProps) {
  return (
    <div className="mb-4 flex items-center">
      <label htmlFor={name} className="mr-2 font-medium text-gray-700">
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field }: any) => (
          <input
            {...field}
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
        )}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm ml-2">{errors[name].message}</p>
      )}
    </div>
  );
}
