import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchInput() {
  return (
    <div className="h-5 p-5 flex flex-row justify-start items-center rounded-md border-solid border-2 border-[#353C59]">
      <SearchIcon className="w-[20%]" />
      <input
        className=" p-0 m-0 w-[80%] ml-5 outline-none"
        type="search"
        placeholder="Buscar..."
      />
    </div>
  );
}
