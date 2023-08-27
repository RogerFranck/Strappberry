import { GridRowsProp } from "@mui/x-data-grid";

export default function useAdmin() {
  const rows: GridRowsProp = [
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
  ];

  const itemsSideBar = [
    {
      name: "Productos",
      link: "/admin",
    },
  ];
  return {
    itemsSideBar,
    rows,
  };
}
