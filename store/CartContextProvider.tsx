import { useReducer, type ReactNode } from "react";
import CartContext from "./cart-context.tsx";
import type { CartContextInterface } from "./cart-context.tsx";
import { cartReducer } from "./cartReducer.ts";
interface CartContextProviderProps {
  children: ReactNode;
}
export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [cartState, cartDispatch] = useReducer(cartReducer, []);
  function handleAddToCart(id: string) {
    cartDispatch({
      type: "ADD",
      payload: id,
    });
  }
  function handleRemoveFromCart(id: string) {
    cartDispatch({
      type: "REMOVE",
      payload: id,
    });
  }
  function handleDecrement(id: string) {
    cartDispatch({
      type: "DECREMENT",
      payload: id,
    });
  }
  const cartCtx: CartContextInterface = {
    cartState,
    handleAddToCart,
    handleRemoveFromCart,
    handleDecrement,
  };
  return <CartContext value={cartCtx}>{children}</CartContext>;
}
