"use client";
import SideBar from "@/components/SideBar";
import React from "react";
import useAdmin from "./hooks/useAdmin";
import { DataGrid } from "@mui/x-data-grid";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import SearchInput from "@/components/SearchInput";
import Modal from "@/components/Modal";
import ProductAdd from "./product/productAdd";

export default function AdminPage() {
  const {
    itemsSideBarAdmin,
    columns,
    handleCloseModal,
    onOpen,
    open,
    row,
    pagination,
    products,
  } = useAdmin();

  return (
    <div className="bg-white h-[100vh] ">
      <SideBar tittle="Productos" items={itemsSideBarAdmin}>
        <div className="w-full my-10 flex justify-center items-center">
          <div className="w-[80%]">
            <div className="flex justify-between items-center">
              <SearchInput
                value={pagination.searchTerm}
                onChange={(e: any) => pagination.setsearchTerm(e.target.value)}
                onClick={() => console.log(pagination.searchTerm)}
              />
              <ButtonPrimary onClick={() => onOpen(false)} size="w-24">
                Agregar
              </ButtonPrimary>
            </div>
            <DataGrid
              rows={products}
              columns={columns}
              loading={pagination.isLoading}
              rowCount={pagination.rowCountState}
              pageSizeOptions={[2, 10, 25, 50]}
              paginationModel={pagination.paginationModel}
              paginationMode="server"
              onPaginationModelChange={pagination.setPaginationModel}
              autoHeight
            />
          </div>
        </div>
        <Modal
          title={`${row ? "Editar" : "Agregar"} Productos`}
          open={open}
          handleClose={handleCloseModal}
        >
          <ProductAdd onClose={handleCloseModal} row={row} />
        </Modal>
      </SideBar>
    </div>
  );
}
