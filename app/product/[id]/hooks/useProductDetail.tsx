import React from "react";

export default function useProductDetail() {
  const itemsSideBar = [
    {
      name: "Productos",
      link: "/",
    },
  ];
  const product = {
    id: 1,
    img: "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UF894,1000_QL80_.jpg",
    name: "Mac01",
    price: "10,000",
    category: "Apple",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati dolorem velit earum, laudantium doloribus dolore ullam, ex quia consequatur quisquam maxime rerum est placeat modi laboriosam itaque vel iure.",
  };
  return {
    itemsSideBar,
    product,
  };
}
