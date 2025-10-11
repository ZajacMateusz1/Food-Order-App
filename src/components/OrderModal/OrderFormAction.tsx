import { useActionState } from "react";
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
  List,
  ListItem,
} from "@mui/material";
interface OrderFormActionProps {
  handleChangeStep: (nextStatus: StepType) => void;
  totalPrice: string;
  handleCloseModal: () => void;
  handleReset: () => void;
}
type handleActionType = {
  inputValues: Record<string, string>;
  formErrors: string[];
};
export default function OrderFormAction({
  handleChangeStep,
  totalPrice,
  handleCloseModal,
  handleReset,
}: OrderFormActionProps) {
  function handleAction(prev: handleActionType, formData: FormData) {
    const inputValues = Object.fromEntries(formData.entries());
    const formErrors: string[] = [];
    if (!isNotEmpty(inputValues.name as string)) {
      formErrors.push("Full name cannot be empty.");
    }
    if (!isEmail(inputValues.email as string)) {
      formErrors.push("Please enter a correct email");
    }
    if (!isNotEmpty(inputValues.street as string)) {
      formErrors.push("Street cannot be empty.");
    }
    if (!isValidZipCode(inputValues.zipCode as string)) {
      formErrors.push("Please enter a correct ZIP code");
    }
    if (!isNotEmpty(inputValues.city as string)) {
      formErrors.push("City cannot be empty.");
    }
    if (formErrors.length > 0) {
      return {
        inputValues,
        formErrors,
      } as handleActionType;
    }
    handleChangeStep("thankYou");
    handleReset();
    return {
      inputValues: {},
      formErrors: [],
    };
  }
  const [formState, formFn, isPending] = useActionState(handleAction, {
    inputValues: {},
    formErrors: [],
  });
  return (
    <>
      <DialogTitle>Checkout</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: "secondary.contrastText" }}>
          Total amount {totalPrice}$
        </DialogContentText>
        <form action={formFn} id="order-form">
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
        {formState.formErrors.length > 0 && (
          <List sx={{ fontSize: "0.9rem", color: "error.light" }}>
            {formState.formErrors.map((error) => (
              <ListItem>{error}</ListItem>
            ))}
          </List>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal}>Cancel</Button>
        <Button onClick={() => handleChangeStep("details")}>Back</Button>
        <Button
          variant="contained"
          type="submit"
          form="order-form"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Submit"}
        </Button>
      </DialogActions>
    </>
  );
}
