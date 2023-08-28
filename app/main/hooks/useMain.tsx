import { itemsSideBar } from "@/const/SideOptions";
import { useGetCategory } from "@/service/useCategoryService";
import { useGetProduct } from "@/service/useProductService";

export default function useMain() {
  const { data: category, isLoading: isLoadingCategory } = useGetCategory();
  const { data: products, isLoading: isLoadingProducts } = useGetProduct();

  return {
    itemsSideBar,
    category,
    isLoadingCategory,
    products,
    isLoadingProducts,
  };
}
