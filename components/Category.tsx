import { Skeleton } from "@mui/material";
import React from "react";

interface CategoryProps {
  items: { name: string }[];
  isLoading?: boolean;
  setcategorySelected?: any;
  categorySelected: string;
}

export default function Category({
  items,
  isLoading,
  categorySelected,
  setcategorySelected,
}: CategoryProps) {
  return (
    <div className="overflow-x-auto whitespace-nowrap">
      <div className="flex flex-row mt-5">
        {isLoading ? (
          [0, 0, 0].map((e, i) => (
            <Skeleton
              key={i}
              variant="rounded"
              width={128}
              height={60}
              className={`p-5 rounded-md bg-gray-300 ${
                i === 0 && "ml-0"
              } mx-5 w-32 flex justify-center cursor-pointer hover:bg-gray-400`}
            />
          ))
        ) : (
          <>
            <div
              className={`p-5 rounded-md bg-gray-300 ml-0 mx-5 w-32 flex justify-center cursor-pointer hover:bg-gray-400
              ${categorySelected === "" && "bg-gray-400"}
              `}
              onClick={() => setcategorySelected("")}
            >
              Todas
            </div>
            {items.map((e, i) => (
              <div
                key={i}
                className={`p-5 rounded-md bg-gray-300 ${
                  i === 0 && "ml-0"
                } mx-5 w-32 flex justify-center cursor-pointer hover:bg-gray-400 ${
                  categorySelected === e.name && "bg-gray-400"
                }`}
                onClick={() => setcategorySelected(e.name)}
              >
                {e.name}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
