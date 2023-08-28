import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Badge from "@mui/material/Badge";
import DrawerBurguer from "./DrawerBurguer";
import ShoppinCar from "@/app/main/shopping/shoppinCar";
import useModal from "@/hooks/useModal";
import Loader from "./loader";
import useShop from "@/hooks/useShop";
import ProtectedPage from "./auth/protectedAuth";
import useSignOut from "@/hooks/useSignOut";

interface SideBarProps {
  children: React.ReactNode;
  tittle: string;
  items?: { name: string; link: string }[];
  clientMenu?: boolean;
  isLoading?: boolean;
}

export default function SideBar({
  children,
  tittle,
  items,
  clientMenu = false,
  isLoading = false,
}: SideBarProps) {
  const { handleCloseModal, handleOpenModal, open } = useModal();
  const { shopList } = useShop();
  const { handleSignOut } = useSignOut();
  return (
    <ProtectedPage>
      <div className="flex flex-row">
        <div className="bg-[#353C59] h-[100vh] p-6 max-sm:hidden">
          <Image
            src="/logo-strappberry.png"
            width={240}
            height={61}
            alt="logoMain"
          />
          <div className="mt-14 flex flex-col justify-between text-white h-[75vh]">
            <div>
              {items?.map((e, i) => (
                <Link
                  key={i}
                  href={e.link}
                  className="flex justify-center hover:bg-[#4f5672] bg-[#545d7e] cursor-pointer my-10 p-3 rounded-md"
                >
                  {e.name}
                </Link>
              ))}
            </div>
            <span
              onClick={handleSignOut}
              className="flex justify-center hover:bg-[#bd5252] bg-[#D15253] cursor-pointer my-10 p-3 rounded-md"
            >
              Cerrar sesión
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div
            className={`p-9 w-full  flex font-bold text-[20px] max-sm:justify-between ${
              clientMenu
                ? "text-black justify-end bg-white "
                : "text-white justify-center bg-[#353C59]"
            }`}
          >
            <div className="sm:hidden">
              <DrawerBurguer items={items} />
            </div>
            {tittle}
            {clientMenu && (
              <Badge
                badgeContent={shopList.length}
                color="primary"
                className="max-sm:ml-0 ml-20 cursor-pointer"
                onClick={handleOpenModal}
              >
                <ShoppingBagOutlinedIcon />
              </Badge>
            )}
            <ShoppinCar open={open} handleClose={handleCloseModal} />
          </div>
          <div
            className={`${
              isLoading ? "flex justify-center items-center mt-40 " : ""
            }`}
          >
            {isLoading ? <Loader /> : children}
          </div>
        </div>
      </div>
    </ProtectedPage>
  );
}
