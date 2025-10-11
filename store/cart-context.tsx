import { createContext } from "react";
import type { CartMeal } from "../types/types.ts";
export interface CartContextInterface {
  cartState: CartMeal[];
  handleAddToCart: (id: string) => void;
  handleRemoveFromCart: (id: string) => void;
  handleChangeQuantity: (id: string, newQuantity: number) => void;
  handleReset: () => void;
  modalStatus: boolean;
  handleShowModal: () => void;
  handleCloseModal: () => void;
}
const CartContext = createContext<CartContextInterface>({
  cartState: [],
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
  handleChangeQuantity: () => {},
  handleReset: () => {},
  modalStatus: false,
  handleShowModal: () => {},
  handleCloseModal: () => {},
});
export default CartContext;
