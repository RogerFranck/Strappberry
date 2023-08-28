import { useRouter } from "next/navigation";
import {
  SignUpInterface,
  useSignUpInterface,
} from "../interface/signUpInterface";
import { useRegister } from "@/service/useAuthService";

export default function useSignUp({ watch }: useSignUpInterface) {
  const router = useRouter();
  const registerMutation = useRegister();

  const handleSignUp = async (data: SignUpInterface) => {
    const response = await registerMutation.mutateAsync({
      ...data,
      isAdmin: Boolean(data.isAdmin),
    });

    if (response?.accessToken) {
      localStorage.setItem("access_token", response?.accessToken);
      router.push(response.user.isAdmin ? "/admin" : "/");
    }
  };

  const confirmPasswordValidation = (value: string) => {
    const passwordValue = watch("password");
    if (value !== passwordValue) {
      return "Las contraseñas no coinciden";
    }
    return true;
  };

  return {
    handleSignUp,
    confirmPasswordValidation,
  };
}
