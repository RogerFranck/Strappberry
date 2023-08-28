import React from "react";
import { Controller, Control } from "react-hook-form";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

interface CounterProps {
  name: string;
  rules?: Record<string, any>;
  control: Control<any>;
  className?: string;
  errors: any;
  cant: number;
  onIncrement: any;
  onDecrement: any;
}

export default function CounterController({
  name,
  rules,
  control,
  errors,
  cant,
  onIncrement,
  onDecrement,
  className = "w-full",
}: CounterProps) {
  return (
    <div>
      <Controller
        control={control}
        name={name}
        defaultValue={cant}
        rules={{
          ...rules,
          min: 1,
          max: 100,
        }}
        render={({ field }: any) => (
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <IconButton
                onClick={() => {
                  field.onChange(field.value - 1);
                  onDecrement();
                }}
                disabled={field.value <= 1}
              >
                <Remove />
              </IconButton>
            </Grid>
            <Grid item xs>
              <TextField
                {...field}
                type="number"
                size="small"
                className={`${className} p-2`}
                disabled
              />
            </Grid>
            <Grid item>
              <IconButton
                onClick={() => {
                  field.onChange(field.value + 1);
                  onIncrement();
                }}
                disabled={field.value >= 100}
                className="cursor-pointer"
              >
                <Add />
              </IconButton>
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
