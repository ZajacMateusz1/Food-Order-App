import { createContext } from "react";
import type { CartMeal } from "../types/types.ts";
export interface CartContextInterface {
  cartState: CartMeal[];
}
const CartContext = createContext<CartContextInterface>({
  cartState: [],
});
export default CartContext;
