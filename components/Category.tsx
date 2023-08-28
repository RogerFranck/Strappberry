import { Skeleton } from "@mui/material";
import React from "react";

interface CategoryProps {
  items: { name: string }[];
  isLoading?: boolean;
}

export default function Category({ items, isLoading }: CategoryProps) {
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
            {items.map((e, i) => (
              <div
                key={i}
                className={`p-5 rounded-md bg-gray-300 ${
                  i === 0 && "ml-0"
                } mx-5 w-32 flex justify-center cursor-pointer hover:bg-gray-400`}
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
