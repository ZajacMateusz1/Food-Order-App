import type { StepType } from "./OrderModal.tsx";
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
interface CartDetailsProps {
  handleChangeStep: (nextStatus: StepType) => void;
}
export default function CartDetails({ handleChangeStep }: CartDetailsProps) {
  return (
    <>
      <DialogTitle>Your Cart</DialogTitle>
      <DialogActions>
        <Button>Cancel</Button>
        <Button onClick={() => handleChangeStep("form")} variant="contained">
          Proceed to Checkout
        </Button>
      </DialogActions>
    </>
  );
}
