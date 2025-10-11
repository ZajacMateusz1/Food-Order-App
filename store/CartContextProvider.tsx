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
      payload: {
        id,
      },
    });
  }
  function handleRemoveFromCart(id: string) {
    cartDispatch({
      type: "REMOVE",
      payload: {
        id,
      },
    });
  }
  function handleChangeQuantity(id: string, newQuantity: number) {
    cartDispatch({
      type: "CHANGEQUANTITY",
      payload: {
        id,
        newQuantity,
      },
    });
  }
  function handleReset() {
    cartDispatch({
      type: "RESET",
      payload: {
        id: "",
      },
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
    handleChangeQuantity,
    handleReset,
    modalStatus,
    handleShowModal,
    handleCloseModal,
  };
  return <CartContext value={cartCtx}>{children}</CartContext>;
}
