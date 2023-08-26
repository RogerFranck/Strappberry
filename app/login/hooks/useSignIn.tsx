import { SignInInterface } from "../interface/SignInInterface";

export default function useSignIn() {
  const handleSignIn = (data: SignInInterface) => {
    console.log({ data });
  };

  return {
    handleSignIn,
  };
}
