import { useLogin } from "@/service/useAuthService";
import { SignInInterface } from "../interface/SignInInterface";
import { useRouter } from "next/navigation";

export default function useSignIn() {
  const router = useRouter();
  const loginMutation = useLogin();

  const handleSignIn = async (data: SignInInterface) => {
    const response = await loginMutation.mutateAsync(data);
    if (response?.accessToken) {
      localStorage.setItem("access_token", response?.accessToken);
      router.push(response.user.isAdmin ? "/admin" : "/");
    }
  };

  return {
    handleSignIn,
  };
}
