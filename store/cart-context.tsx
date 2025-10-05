import { createContext } from "react";
import type { Meal } from "../types/types.tsx";
export interface CartContextInterface {
  cart: Meal[];
}
const CartContext = createContext<CartContextInterface>({
  cart: [],
});
export default CartContext;
