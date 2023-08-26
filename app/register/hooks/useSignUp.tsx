import {
  SignUpInterface,
  useSignUpInterface,
} from "../interface/signUpInterface";

export default function useSignUp({ watch }: useSignUpInterface) {
  const handleSignUp = (data: SignUpInterface) => {
    console.log({ data });
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
