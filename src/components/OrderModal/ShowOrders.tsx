import Loading from "../Loading.tsx";
import ErrorInfo from "../ErrorInfo";
import useFetch from "../../hooks/useFetch.ts";
import { getOrders } from "../../../http.ts";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
interface ShowOrdersProps {
  handleClose: () => void;
}
export default function ShowOrders({ handleClose }: ShowOrdersProps) {
  const { data: orderData, error, isLoading } = useFetch(getOrders, []);
  if (error) return <ErrorInfo errorText={error}></ErrorInfo>;
  if (isLoading) return <Loading />;
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 130 },
    {
      field: "name",
      headerName: "Name",
      width: 130,
      valueGetter: (value, orderData) => `${orderData.clientData.name}`,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      valueGetter: (value, orderData) => `${orderData.clientData.email}`,
    },
    {
      field: "adress",
      headerName: "Adress",
      width: 250,
      valueGetter: (value, orderData) =>
        `${orderData.clientData.zipCode} ${orderData.clientData.city} ${orderData.clientData.street}`,
    },
    {
      field: "totalPrice",
      headerName: "Total price",
      type: "number",
      width: 90,
    },
  ];
  const paginationModel = { page: 0, pageSize: 5 };
  return (
    <>
      <DialogTitle>Orders</DialogTitle>
      <DialogContent>
        <DataGrid
          rows={orderData}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          density="compact"
          disableColumnSelector={false}
          rowSelection={false}
          sx={{ border: 0, fontSize: { xs: "0.7rem" } }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </>
  );
}
