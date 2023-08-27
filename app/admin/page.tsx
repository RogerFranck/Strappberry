"use client";
import SideBar from "@/components/SideBar";
import React from "react";
import useAdmin from "./hooks/useAdmin";
import { DataGrid } from "@mui/x-data-grid";
import productColumns from "./product/productColumns";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import SearchInput from "@/components/SearchInput";
import Modal from "@/components/Modal";
import useModal from "@/hooks/useModal";
import ProductAdd from "./product/productAdd";

export default function AdminPage() {
  const { itemsSideBar, rows } = useAdmin();
  const { open, handleCloseModal, handleOpenModal } = useModal();
  return (
    <div className="bg-white h-[100vh] ">
      <SideBar tittle="Productos" items={itemsSideBar}>
        <div className="w-full my-10 flex justify-center items-center">
          <div className="w-[80%]">
            <div className="flex justify-between items-center">
              <SearchInput />
              <ButtonPrimary onClick={handleOpenModal} size="w-24">
                Agregar
              </ButtonPrimary>
            </div>
            <DataGrid rows={rows} columns={productColumns} autoHeight />
          </div>
        </div>
        <Modal
          title="Agregar Productos"
          open={open}
          handleClose={handleCloseModal}
        >
          <ProductAdd onClose={handleCloseModal} />
        </Modal>
      </SideBar>
    </div>
  );
}
