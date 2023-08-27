import React from "react";

export default function useProductAdd() {
  const handleSaveProduct = (data: any) => {
    console.log({ data });
  };
  return { handleSaveProduct };
}
