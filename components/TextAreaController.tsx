import React from "react";
import { Controller, Control } from "react-hook-form";

interface TextAreaProps {
  name: string;
  label: string;
  placeholder?: string;
  rules?: Record<string, any>;
  control: Control<any>;
  className?: string;
  isSecret?: boolean;
  errors: any;
}

export default function TextAreaController({
  name,
  label,
  placeholder,
  rules,
  control,
  errors,
  className = "w-full",
  isSecret = false,
}: TextAreaProps) {
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
          <textarea
            {...field}
            type={`${isSecret ? "password" : "text"}`}
            placeholder={placeholder}
            rows={4}
            className={` ${className} mt-1 p-2 border rounded-md ${
              field.invalid ? "border-red-500" : "border-gray-300"
            }`}
          />
        )}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
}
