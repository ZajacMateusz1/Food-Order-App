import ErrorInfo from "../ErrorInfo.tsx";
import type { StepType } from "./OrderModal.tsx";
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
interface ThankYouProps {
  orderResponse: { id: string };
  orderError: string;
  handleChangeStep: (nextStatus: StepType) => void;
  handleCloseModal: () => void;
}
export default function ThankYou({
  orderResponse,
  orderError,
  handleChangeStep,
  handleCloseModal,
}: ThankYouProps) {
  function handleClose() {
    handleCloseModal();
    handleChangeStep("details");
  }
  if (orderError) {
    return <ErrorInfo errorText={orderError}></ErrorInfo>;
  }
  return (
    <>
      <DialogTitle>Thank you for your order!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Your order has been successfully placed.
        </DialogContentText>
        <DialogContentText>Order id is {orderResponse.id}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </>
  );
}
