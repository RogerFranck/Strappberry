import { LOGIN_API, REGISTER_API } from "@/const/Api";
import { setUser } from "@/redux/context/authSlice";
import { usePost } from "@/utils/fetch";

export const useLogin = () => usePost({
  url: LOGIN_API,
  setItem: setUser,
  successMsg: "Inicio de sesión exitoso!",
  errorMsg: "Credenciales incorrectas"
})

export const useRegister = () => usePost({
  url: REGISTER_API,
  setItem: setUser,
  successMsg: "Inicio de sesión exitoso!",
  errorMsg: "Error al crear la cuenta"
})