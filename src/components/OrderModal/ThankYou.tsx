import type { StepType } from "./OrderModal.tsx";
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
interface ThankYouProps {
  handleChangeStep: (nextStatus: StepType) => void;
  handleCloseModal: () => void;
}
export default function ThankYou({
  handleChangeStep,
  handleCloseModal,
}: ThankYouProps) {
  function handleClose() {
    handleCloseModal();
    handleChangeStep("details");
  }
  return (
    <>
      <DialogTitle>Thank you for your order!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Your order has been successfully placed.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </>
  );
}
