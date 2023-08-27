import React from "react";
import { Controller, Control } from "react-hook-form";
import { Button, Grid, TextField } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

interface CounterProps {
  name: string;
  rules?: Record<string, any>;
  control: Control<any>;
  className?: string;
  errors: any;
}

export default function CounterController({
  name,
  rules,
  control,
  errors,
  className = "w-full",
}: CounterProps) {
  return (
    <div className="mb-4">
      <Controller
        control={control}
        name={name}
        rules={{
          ...rules,
          min: 1,
          max: 100,
        }}
        render={({ field }: any) => (
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Button
                variant="outlined"
                onClick={() => field.onChange(field.value - 1)}
                disabled={field.value <= 1}
              >
                <Remove />
              </Button>
            </Grid>
            <Grid item xs>
              <TextField
                {...field}
                type="number"
                className={` ${className} p-2 border rounded-md ${
                  field.invalid ? "border-red-500" : "border-gray-300"
                }`}
              />
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                onClick={() => field.onChange(field.value + 1)}
                disabled={field.value >= 100}
              >
                <Add />
              </Button>
            </Grid>
          </Grid>
        )}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
}
