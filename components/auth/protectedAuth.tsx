import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAccessToken } from "@/utils/token";
import Loader from "../loader";

const ProtectedPage = ({ children }: any) => {
  const router = useRouter();
  const [token, settoken] = useState<any>(null);

  useEffect(() => {
    const accessToken = getAccessToken();
    settoken(accessToken);
    if (!accessToken) {
      router.push("/login");
    }
  }, []);

  if (token) {
    return <>{children}</>;
  }
  return (
    <div className="flex justify-center items-center mt-52">
      <Loader />
    </div>
  );
};

export default ProtectedPage;
