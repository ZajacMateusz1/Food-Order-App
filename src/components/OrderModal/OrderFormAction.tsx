import { isNotEmpty, isEmail, isValidZipCode } from "../../util/validation.ts";
import type { StepType } from "./OrderModal.tsx";
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Box,
} from "@mui/material";
interface OrderFormActionProps {
  handleChangeStep: (nextStatus: StepType) => void;
  totalPrice: string;
  handleCloseModal: () => void;
  handleReset: () => void;
}
export default function OrderFormAction({
  handleChangeStep,
  totalPrice,
  handleCloseModal,
  handleReset,
}: OrderFormActionProps) {
  function handleAction(formData: FormData) {
    handleChangeStep("thankYou");
    handleReset();
  }
  return (
    <>
      <DialogTitle>Checkout</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: "secondary.contrastText" }}>
          Total amount {totalPrice}$
        </DialogContentText>
        <form action={handleAction} id="order-form">
          <TextField
            margin="dense"
            id="name"
            name="name"
            label="Full name"
            type="input"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="street"
            name="street"
            label="Street"
            type="input"
            fullWidth
            variant="standard"
          />
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <TextField
              margin="dense"
              id="zipCode"
              name="zipCode"
              label="ZIP code"
              type="input"
              variant="standard"
            />
            <TextField
              sx={{ flexGrow: "1" }}
              margin="dense"
              id="city"
              name="city"
              label="City"
              type="input"
              variant="standard"
            />
          </Box>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal}>Cancel</Button>
        <Button onClick={() => handleChangeStep("details")}>Back</Button>
        <Button variant="contained" type="submit" form="order-form">
          Submit
        </Button>
      </DialogActions>
    </>
  );
}
