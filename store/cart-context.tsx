import { createContext } from "react";
import type { CartMeal } from "../types/types.ts";
export interface CartContextInterface {
  cartState: CartMeal[];
  handleAddToCart: (id: string) => void;
  handleRemoveFromCart: (id: string) => void;
  handleDecrement: (id: string) => void;
  handleReset: () => void;
  modalStatus: boolean;
  handleShowModal: () => void;
  handleCloseModal: () => void;
}
const CartContext = createContext<CartContextInterface>({
  cartState: [],
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
  handleDecrement: () => {},
  handleReset: () => {},
  modalStatus: false,
  handleShowModal: () => {},
  handleCloseModal: () => {},
});
export default CartContext;
