import useInput from "../../hooks/useInput.ts";
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
interface OrderFormStateProps {
  handleChangeStep: (nextStatus: StepType) => void;
  totalPrice: string;
  handleCloseModal: () => void;
  handleReset: () => void;
}
export default function OrderFormState({
  handleChangeStep,
  totalPrice,
  handleCloseModal,
  handleReset,
}: OrderFormStateProps) {
  const {
    value: nameValue,
    handleInputChange: handleNameChange,
    handleOnBlur: handleNameOnBlur,
    error: nameError,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleOnBlur: handleEmailOnBlur,
    error: emailError,
  } = useInput(isEmail);
  const {
    value: streetValue,
    handleInputChange: handleStreetChange,
    handleOnBlur: handleStreetOnBlur,
    error: streetError,
  } = useInput(isNotEmpty);
  const {
    value: zipCodeValue,
    handleInputChange: handleZipCodeChange,
    handleOnBlur: handleZipCodeOnBlur,
    error: zipCodeError,
  } = useInput(isValidZipCode);
  const {
    value: cityValue,
    handleInputChange: handleCityChange,
    handleOnBlur: handleCityOnBlur,
    error: cityError,
  } = useInput(isNotEmpty);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (nameError || emailError || streetError || zipCodeError || cityError) {
      return;
    }
    if (
      !nameValue ||
      !emailValue ||
      !streetValue ||
      !zipCodeValue ||
      !cityValue
    ) {
      handleNameOnBlur();
      handleEmailOnBlur();
      handleStreetOnBlur();
      handleZipCodeOnBlur();
      handleCityOnBlur();
      return;
    }
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
        <form onSubmit={handleSubmit} id="order-form">
          <TextField
            margin="dense"
            id="name"
            name="name"
            label="Full name"
            type="input"
            fullWidth
            variant="standard"
            value={nameValue}
            error={nameError}
            helperText={nameError ? "This field cannot be empty" : ""}
            onChange={(e) => handleNameChange(e.target.value)}
            onBlur={handleNameOnBlur}
          />
          <TextField
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={emailValue}
            error={emailError}
            helperText={emailError ? "Please enter a correct email" : ""}
            onChange={(e) => handleEmailChange(e.target.value)}
            onBlur={handleEmailOnBlur}
          />
          <TextField
            margin="dense"
            id="street"
            name="street"
            label="Street"
            type="input"
            fullWidth
            variant="standard"
            value={streetValue}
            error={streetError}
            helperText={streetError ? "This field cannot be empty" : ""}
            onChange={(e) => handleStreetChange(e.target.value)}
            onBlur={handleStreetOnBlur}
          />
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <TextField
              margin="dense"
              id="zipCode"
              name="zipCode"
              label="ZIP code"
              type="input"
              variant="standard"
              value={zipCodeValue}
              error={zipCodeError}
              helperText={zipCodeError ? "Please enter a correct ZIP code" : ""}
              onChange={(e) => handleZipCodeChange(e.target.value)}
              onBlur={handleZipCodeOnBlur}
            />
            <TextField
              sx={{ flexGrow: "1" }}
              margin="dense"
              id="city"
              name="city"
              label="City"
              type="input"
              variant="standard"
              value={cityValue}
              error={cityError}
              helperText={cityError ? "This field cannot be empty" : ""}
              onChange={(e) => handleCityChange(e.target.value)}
              onBlur={handleCityOnBlur}
            />
          </Box>
        </form>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={() => handleChangeStep("details")}>
          Back
        </Button>
        <Button onClick={handleCloseModal}>Cancel</Button>
        <Button variant="contained" type="submit" form="order-form">
          Submit
        </Button>
      </DialogActions>
    </>
  );
}
