import { itemsSideBar } from "@/const/SideOptions";
import { Productpayload } from "@/redux/context/productSlice";
import { getProductById } from "@/service/useProductService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function useProductDetail() {

  const params = useParams();
  const [product, setproduct] = useState<null|Productpayload>(null)
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    const handleGetById = async () => {
      try {
        setisLoading(true)
        const {data} = await getProductById(params.id)
        setproduct(data)
      } catch (error) {
        toast.error("Error!")
      } finally {
        setisLoading(false)
      }
    }
   
    handleGetById()
  }, [])
  
  return {
    itemsSideBar,
    product,
    isLoading
  };
}
