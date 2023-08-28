import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAccessToken } from "@/utils/token";
import Loader from "../loader";

const ProtectedPage = ({ children }: any) => {
  const accessToken = getAccessToken();
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      router.push("/login");
    }
  }, [accessToken]);

  if (accessToken) {
    return <>{children}</>;
  }
  return (
    <div className="flex justify-center items-center mt-52">
      <Loader />
    </div>
  );
};

export default ProtectedPage;
