import { itemsSideBarAdmin } from "@/const/SideOptions";
import { useDeleteProduct } from "@/service/useProductService";
import productColumns from "../product/productColumns";
import useModal from "@/hooks/useModal";
import { useState } from "react";
import usePagination from "./usePagination";
import { useAppSelector } from "@/redux/hooks";

export default function useAdmin() {
  const { open, handleCloseModal, handleOpenModal } = useModal();
  const [row, setRow] = useState(null);

  const onOpen = (data: any) => {
    setRow(data);
    handleOpenModal();
  };

  const pagination = usePagination()

  const selector = (state: any) => state.productReducer.products
  const products = useAppSelector(selector);

  const deleteProductMutation = useDeleteProduct();

  const deleteProducts = async (id: number) => {
    if (!confirm("¿Eliminar producto de forma permanente?")) return;
    await deleteProductMutation.mutateAsync(id);
  };

  const columns = productColumns({ deleteProducts, onOpen });

  return {
    itemsSideBarAdmin,
    open,
    handleCloseModal,
    onOpen,
    columns,
    row,
    pagination,
    products
  };
}
