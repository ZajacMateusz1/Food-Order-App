import Loading from "../Loading.tsx";
import ErrorInfo from "../ErrorInfo.tsx";
import type { MealToShowInCartDetails } from "../../../types/types.ts";
import type { StepType } from "./OrderModal.tsx";
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
interface CartDetailsProps {
  handleChangeStep: (nextStatus: StepType) => void;
  meals: MealToShowInCartDetails[];
  error: string;
  isLoading: boolean;
  totalPrice: string;
  handleAddToCart: (id: string) => void;
  handleRemoveFromCart: (id: string) => void;
  handleChangeQuantity: (id: string, newQuantity: number) => void;
  handleCloseModal: () => void;
}
export default function CartDetails({
  handleChangeStep,
  meals,
  error,
  isLoading,
  totalPrice,
  handleRemoveFromCart,
  handleChangeQuantity,
  handleCloseModal,
}: CartDetailsProps) {
  if (error) {
    return <ErrorInfo errorText={error} />;
  }
  if (isLoading) return <Loading />;
  return (
    <>
      <DialogTitle>Your Cart</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: "secondary.contrastText" }}>
          Total amount {totalPrice}$
        </DialogContentText>
        <List>
          {meals.map((meal) => {
            return (
              <ListItem
                key={meal.id}
                secondaryAction={
                  <IconButton
                    onClick={() => handleRemoveFromCart(meal.id)}
                    edge="end"
                  >
                    <DeleteIcon
                      sx={{
                        fontSize: "1.5rem",
                        color: "secondary.contrastText",
                      }}
                    />
                  </IconButton>
                }
                sx={{ fontSize: { xs: "0.7rem" } }}
              >
                <ListItemText
                  primary={meal.name}
                  secondary={
                    <Box
                      sx={{
                        width: { xs: "75%", sm: "25%" },
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center",
                      }}
                    >
                      <Typography>
                        {(meal.price * meal.quantity).toFixed(2)}$
                      </Typography>
                      <TextField
                        onBlur={(e) => {
                          const numberValue = Number(e.currentTarget.value);
                          if (
                            !e.currentTarget.value.length ||
                            numberValue <= 0
                          ) {
                            e.currentTarget.value = meal.quantity.toString();
                            return;
                          }
                          handleChangeQuantity(meal.id, numberValue);
                        }}
                        sx={{ flexGrow: "1" }}
                        slotProps={{
                          input: { disableUnderline: true },
                          htmlInput: {
                            style: {
                              padding: "0.3rem",
                            },
                          },
                        }}
                        type="number"
                        variant="filled"
                        size="small"
                        defaultValue={meal.quantity}
                      />
                    </Box>
                  }
                ></ListItemText>
              </ListItem>
            );
          })}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal}>Cancel</Button>
        <Button
          onClick={() => handleChangeStep("form")}
          variant="contained"
          disabled={meals.length === 0}
        >
          Checkout
        </Button>
      </DialogActions>
    </>
  );
}
