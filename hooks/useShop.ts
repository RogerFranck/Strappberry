import { ProductShopInterface, addShopList, deleteShopList, reset, updateShopList } from "@/redux/context/shopSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toast } from "react-toastify";

export default function useShop() {

  const selector = (state: any) => state.shopListReducer.shopList
  const shopList = useAppSelector(selector);

  const dispatch = useAppDispatch();

  const handleAddShopList = (row:any) => {
    const isAlredyRow = shopList.find(({id}:any)=>row.id === id)
    if(isAlredyRow){
      return
    }else{
      dispatch(addShopList({ ...row, cant: 1 }))
    }
  }

  const handleDelete = (id:number) => {
    dispatch(deleteShopList(id))
  }

  const handleChangueIncrement = (idRow:number) => {
    const isAlredyRow = shopList.find(({id}:any)=>idRow === id)
    dispatch(updateShopList({ ...isAlredyRow, cant: isAlredyRow.cant + 1 }))
  }

  const handleChangueDecrement = (idRow:number) => {
    const isAlredyRow = shopList.find(({id}:any)=>idRow === id)
    dispatch(updateShopList({ ...isAlredyRow, cant: isAlredyRow.cant - 1 }))
  }

  const onBuyComplete = (onEnd:()=>void) => {
    toast.success("Compra completada!")
    dispatch(reset())
    onEnd()
  }

  const total = shopList.reduce((accumulator: number, product: ProductShopInterface) => {
    return accumulator + product.cant * product.price;
  }, 0);

  return {
    shopList,
    handleAddShopList,
    handleDelete,
    handleChangueIncrement,
    handleChangueDecrement,
    onBuyComplete,
    total
  }
}
