import { setProducts } from '@/redux/context/productSlice';
import { useAppDispatch } from '@/redux/hooks';
import { handleGetProductPagination, handleSearchProduct } from '@/service/useProductService';
import { useState, useEffect } from "react";

export default function usePagination() {
  const dispatch = useAppDispatch();

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  const [searchTerm, setsearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const [rowCountState, setRowCountState] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await handleGetProductPagination(paginationModel.page + 1, paginationModel.pageSize)
        const data = response.data;
        dispatch(setProducts(data.data))
        setRowCountState(data.total);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [paginationModel]);

  useEffect(() => {
    async function searchData() {
      if(searchTerm === "") {
        try {
          setIsLoading(true);
          const response = await handleGetProductPagination(1, 10)
          const data = response.data;
          dispatch(setProducts(data.data))
          setRowCountState(data.total);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setIsLoading(false);
        }
      }
      try {
        setIsLoading(true);
        const response = await handleSearchProduct(searchTerm)
        const data = response.data;
        dispatch(setProducts(data))
        setRowCountState(data.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }
   
    searchData();
  }, [searchTerm])
  

  return {
    rows,
    isLoading,
    rowCountState,
    paginationModel,
    setPaginationModel,
    searchTerm, 
    setsearchTerm
  }
}
