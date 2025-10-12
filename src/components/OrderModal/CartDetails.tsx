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
  handleReset: () => void;
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
  handleReset,
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
                sx={{
                  fontSize: { xs: "0.7rem" },
                  display: "grid",
                  gridTemplateColumns: "repeat(12,1fr)",
                  gridTemplateRowsL: "repeat(2,1fr)",
                }}
              >
                <ListItemText sx={{ gridColumn: "1/12", gridRow: "1/2" }}>
                  {meal.name}
                </ListItemText>
                <ListItemText
                  sx={{
                    gridColumn: { sm: "1/6", md: "1/3" },
                    gridRow: "2/3",
                  }}
                >
                  {(meal.price * meal.quantity).toFixed(2)}$
                </ListItemText>
                <TextField
                  onBlur={(e) => {
                    const numberValue = Number(e.currentTarget.value);
                    if (
                      !e.currentTarget.value.length ||
                      numberValue <= 0 ||
                      numberValue === meal.quantity
                    ) {
                      e.currentTarget.value = meal.quantity.toString();
                      return;
                    }
                    if (numberValue > 999) {
                      return handleChangeQuantity(meal.id, 999);
                    }
                    handleChangeQuantity(meal.id, numberValue);
                  }}
                  sx={{ gridColumn: { xs: "6/9", md: "3/5" }, gridRow: "2/3" }}
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
              </ListItem>
            );
          })}
        </List>
      </DialogContent>
      <DialogActions>
        {meals.length > 0 && (
          <Button variant="outlined" onClick={handleReset}>
            Clear
          </Button>
        )}
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
