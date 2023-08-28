import { itemsSideBar } from "@/const/SideOptions";
import { setProducts } from "@/redux/context/productSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetCategory } from "@/service/useCategoryService";
import {
  handleSearchCategory,
  useGetProduct,
} from "@/service/useProductService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function useMain() {
  const dispatch = useAppDispatch();
  const { data: category, isLoading: isLoadingCategory } = useGetCategory();

  const selector = (state: any) => state.productReducer.products;
  const products = useAppSelector(selector);

  const [categorySelected, setcategorySelected] = useState("");
  const [isLoadingProducts, setIsLoading] = useState(true);

  useEffect(() => {
    const handleGetProductsByCategory = async () => {
      try {
        setIsLoading(true);
        const response = await handleSearchCategory(categorySelected);
        const data = response.data;
        dispatch(setProducts(data));
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Error!");
      } finally {
        setIsLoading(false);
      }
    };
    handleGetProductsByCategory();
  }, [categorySelected]);

  return {
    itemsSideBar,
    category,
    isLoadingCategory,
    products,
    isLoadingProducts,
    categorySelected,
    setcategorySelected,
  };
}
