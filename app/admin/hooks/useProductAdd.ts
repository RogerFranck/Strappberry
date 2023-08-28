import { NO_IMG } from "@/const/Img";
import { CategoryInterface } from "@/redux/context/categorySlice";
import { useGetCategory } from "@/service/useCategoryService";
import { usePostProduct, usePutProduct } from "@/service/useProductService";
import { useForm } from "react-hook-form";

interface useProductAddProps {
  onClose?:()=>void 
  row?: any;
}

export default function useProductAdd({ onClose = () => {}, row }: useProductAddProps ) {
  const isUpdate = !!row

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { ...row, img: null} ?? null
  });
  
  const addProductMutation = usePostProduct()
  const updateProductMutation = usePutProduct()

  const handleSaveProduct = async (data: any) => {
    if (isUpdate){
      const payload = {
        id: row.id,
        data: {
          ...row,
          ...data,
          img: row.img ?? NO_IMG
        }
      }
      await updateProductMutation.mutateAsync(payload)
    }else{
      await addProductMutation.mutateAsync({...data, img: NO_IMG})
    }
    onClose()
  };
  
  const { data: category, isLoading: isLoadingCategory } = useGetCategory();

  const options = category.map((e: CategoryInterface) => ({
    label: e.name,
    value: e.name,
  }));

  const isImgSelected = !watch('img') && isUpdate

  return { 
    handleSaveProduct, 
    options, 
    isLoadingCategory, 
    control,
    handleSubmit,
    errors,
    isImgSelected,
  };
}
