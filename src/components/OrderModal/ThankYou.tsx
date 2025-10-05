import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
export default function ThankYou() {
  return (
    <>
      <DialogTitle>Thank you for your order!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Your order has been successfully placed.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button>Close</Button>
      </DialogActions>
    </>
  );
}
