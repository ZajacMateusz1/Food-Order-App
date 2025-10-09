import { useReducer, useState, type ReactNode } from "react";
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
  function handleReset() {
    cartDispatch({
      type: "RESET",
      payload: "",
    });
  }
  const [modalStatus, setmodalStatus] = useState<boolean>(false);
  function handleShowModal() {
    setmodalStatus(true);
  }
  function handleCloseModal() {
    setmodalStatus(false);
  }
  const cartCtx: CartContextInterface = {
    cartState,
    handleAddToCart,
    handleRemoveFromCart,
    handleDecrement,
    handleReset,
    modalStatus,
    handleShowModal,
    handleCloseModal,
  };
  return <CartContext value={cartCtx}>{children}</CartContext>;
}
