import React from "react";
import { Controller, Control } from "react-hook-form";

interface SelectInputProps {
  name: string;
  label: string;
  options: { label: string; value: string }[];
  control: Control<any>;
  className?: string;
  errors: any;
  rules?: Record<string, any>;
}

export default function SelectInputController({
  name,
  label,
  options,
  control,
  className = "w-full",
  errors,
  rules,
}: SelectInputProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-medium text-gray-700">
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }: any) => (
          <select
            {...field}
            className={` ${className} mt-1 p-2 border rounded-md ${
              field.invalid ? "border-red-500" : "border-gray-300"
            }`}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
}
