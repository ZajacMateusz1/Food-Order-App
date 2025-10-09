import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
interface ThankYouProps {
  handleCloseModal: () => void;
}
export default function ThankYou({ handleCloseModal }: ThankYouProps) {
  return (
    <>
      <DialogTitle>Thank you for your order!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Your order has been successfully placed.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal}>Close</Button>
      </DialogActions>
    </>
  );
}
