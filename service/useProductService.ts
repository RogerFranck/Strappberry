import { PRODUCT_API } from "@/const/Api";
import { axiosGet, useDelete, useGet, usePost, usePut } from "@/utils/fetch";
import { addProducts, deleteProducts, setProducts, updateProducts } from "@/redux/context/productSlice";

export const useGetProduct = () => useGet({ 
  url: PRODUCT_API, 
  store: 'productReducer', 
  itemList: 'products',
  setItem: setProducts 
})

export const usePostProduct = () => usePost({
  url: PRODUCT_API,
  setItem: addProducts
})

export const usePutProduct = () => usePut({
  url: PRODUCT_API,
  setItem: updateProducts
})

export const useDeleteProduct = () => useDelete({
  url: PRODUCT_API,
  setItem: deleteProducts
})

export const handleGetProductPagination = (page: number, perPage: number) => axiosGet({url: `${PRODUCT_API}/${page}/${perPage}`})

export const handleSearchProduct = (q: string) => axiosGet({ url:`${PRODUCT_API}/search?q=${q}` })

