import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

interface ModalInterface {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  title: string;
  background?: string;
}

export default function Modal({
  open,
  handleClose,
  children,
  title,
  background = "bg-white",
}: ModalInterface) {
  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle className={`flex justify-center ${background}`}>
        {title}
      </DialogTitle>
      <DialogContent className={background}>{children}</DialogContent>
    </Dialog>
  );
}
