import { useReducer, type ReactNode } from "react";
import CartContext from "./cart-context.tsx";
import type { CartContextInterface } from "./cart-context.tsx";
import type { Meal } from "../types/types.ts";
import { cartReducer } from "./cartReducer.ts";
interface CartContextProviderProps {
  children: ReactNode;
}
export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [cartState, cartDispatch] = useReducer(cartReducer, []);
  const cartCtx: CartContextInterface = {
    cartState,
  };
  function handleAddToCart(meal: Meal) {
    cartDispatch({
      type: "ADD",
      payload: meal,
    });
  }
  return <CartContext value={cartCtx}>{children}</CartContext>;
}
