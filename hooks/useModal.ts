import { useState } from "react";

export default function useModal() {
  const [open, setopen] = useState(false);

  const handleOpenModal = () => setopen(true);
  const handleCloseModal = () => setopen(false);

  return {
    open,
    handleOpenModal,
    handleCloseModal,
  };
}
