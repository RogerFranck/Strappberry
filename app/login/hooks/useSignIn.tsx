import { SignInInterface } from "../interface/SignInInterface";
import { useRouter } from "next/navigation";

export default function useSignIn() {
  const router = useRouter();
  const handleSignIn = (data: SignInInterface) => {
    console.log({ data });
    router.push("/admin");
  };

  return {
    handleSignIn,
  };
}
