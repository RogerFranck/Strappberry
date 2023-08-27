import React, { useState } from "react";
import { Controller, Control } from "react-hook-form";

interface FileInputProps {
  name: string;
  label: string;
  accept?: string;
  rules?: Record<string, any>;
  control: Control<any>;
  className?: string;
  errors: any;
}

export default function FileInputController({
  name,
  label,
  accept,
  rules,
  control,
  errors,
  className = "w-full",
}: FileInputProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file && file.type.includes("image")) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

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
          <>
            <input
              {...field}
              type="file"
              accept={accept}
              className={` ${className} mt-1 p-2 border rounded-md ${
                field.invalid ? "border-red-500" : "border-gray-300"
              }`}
              onChange={(e) => {
                field.onChange(e);
                handleImageChange(e);
              }}
            />
            {previewUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={previewUrl}
                alt="Previsualización"
                className="mt-2 rounded-md max-h-40"
              />
            )}
          </>
        )}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
}
