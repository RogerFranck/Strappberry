"use client";
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { AccountCircle, Inbox, Mail } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";

interface DrawerBurguerProps {
  items?: { name: string; link: string }[];
}

const DrawerBurguer = ({ items }: DrawerBurguerProps) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (openState: boolean) => () => {
    setOpen(openState);
  };

  return (
    <div>
      <MenuIcon onClick={toggleDrawer(true)} />
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List className="h-[100vh] flex flex-col justify-between bg-[#353C59] text-white">
          <div>
            <Image
              src="/logo-strappberry.png"
              width={140}
              height={41}
              alt="logoMain"
              className="m-5"
            />
            {items?.map((e, i) => (
              <Link
                key={i}
                href={e.link}
                className="flex justify-center hover:bg-[#4f5672] bg-[#545d7e] m-5 rounded-md my-10 p-3 "
              >
                {e.name}
              </Link>
            ))}
          </div>
          <span className="flex justify-center hover:bg-[#bd5252] bg-[#D15253] m-5 mt-20 cursor-pointer my-10 p-3 rounded-md">
            Cerrar sesión
          </span>
        </List>
      </Drawer>
    </div>
  );
};

export default DrawerBurguer;
