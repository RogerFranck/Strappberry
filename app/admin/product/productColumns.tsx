import { GridColDef, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const productColumns: GridColDef[] = [
  {
    field: "img",
    headerName: "Imagen",
    flex: 1,
    minWidth: 150,
    headerClassName: "bg-[#353C59] text-white",
    renderCell: ({ row }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={row.img} width={50} height={25} alt="hola" />
    ),
  },
  {
    field: "name",
    headerName: "Nombre",
    flex: 1,
    minWidth: 150,
    headerClassName: "bg-[#353C59] text-white",
  },
  {
    field: "price",
    headerName: "Precio",
    flex: 1,
    minWidth: 150,
    headerClassName: "bg-[#353C59] text-white",
    valueGetter: ({ row }) => `$${row.price}`,
  },
  {
    field: "category",
    headerName: "Categoria",
    flex: 1,
    minWidth: 150,
    headerClassName: "bg-[#353C59] text-white",
  },
  {
    field: "actions",
    type: "actions",
    headerClassName: "bg-[#353C59] text-white",
    headerName: "Acciones",
    getActions: (params) => [
      <GridActionsCellItem
        icon={<EditIcon />}
        label="Editar"
        onClick={() => console.log("hola")}
        key={1}
      />,
      <GridActionsCellItem
        icon={<DeleteIcon />}
        label="Eliminar"
        onClick={() => console.log("hola")}
        key={2}
      />,
    ],
  },
];

export default productColumns;
