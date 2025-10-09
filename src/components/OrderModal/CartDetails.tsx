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
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
interface CartDetailsProps {
  handleChangeStep: (nextStatus: StepType) => void;
  meals: MealToShowInCartDetails[];
  error: string;
  isLoading: boolean;
  totalPrice: string;
  handleAddToCart: (id: string) => void;
  handleRemoveFromCart: (id: string) => void;
  handleDecrement: (id: string) => void;
  handleCloseModal: () => void;
}
export default function CartDetails({
  handleChangeStep,
  meals,
  error,
  isLoading,
  totalPrice,
  handleAddToCart,
  handleRemoveFromCart,
  handleDecrement,
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
                  <Stack direction="row" spacing={0.5}>
                    <IconButton
                      onClick={
                        meal.quantity === 1
                          ? () => handleRemoveFromCart(meal.id)
                          : () => handleDecrement(meal.id)
                      }
                      edge="end"
                    >
                      {meal.quantity === 1 ? (
                        <DeleteIcon
                          sx={{
                            fontSize: "1rem",
                            color: "secondary.contrastText",
                          }}
                        />
                      ) : (
                        <RemoveIcon
                          sx={{
                            fontSize: "1rem",
                            color: "secondary.contrastText",
                          }}
                        />
                      )}
                    </IconButton>
                    <IconButton
                      onClick={() => handleAddToCart(meal.id)}
                      edge="end"
                    >
                      <AddIcon
                        sx={{
                          fontSize: "1rem",
                          color: "secondary.contrastText",
                        }}
                      />
                    </IconButton>
                  </Stack>
                }
                sx={{ fontSize: { xs: "0.7rem" } }}
              >
                <ListItemText
                  primary={meal.name}
                  secondary={`${(meal.price * meal.quantity).toFixed(2)}$ ${
                    meal.quantity
                  }x`}
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
