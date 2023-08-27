import React from "react";

export default function useShopCar() {
  const product = [
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UF894,1000_QL80_.jpg",
      name: "Mac01",
      price: "10,000",
      category: "Apple",
    },
    {
      id: 2,
      img: "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UF894,1000_QL80_.jpg",
      name: "Mac02",
      price: "20,000",
      category: "Apple",
    },
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UF894,1000_QL80_.jpg",
      name: "Mac01",
      price: "10,000",
      category: "Apple",
    },
  ];
  return {
    product,
  };
}
