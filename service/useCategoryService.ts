import { CARTEGORY_API } from "@/const/Api";
import { useGet } from "@/utils/fetch";
import { setCategories } from "@/redux/context/categorySlice"

export const useGetCategory = () => useGet({ 
  url: CARTEGORY_API, 
  store: 'categoryReducer', 
  itemList: 'categories',
  setItem: setCategories 
})