import { type ReactNode } from "react";
import CartContext from "./cart-context.tsx";
import type { CartContextInterface } from "./cart-context.tsx";
interface CartContextProviderProps {
  children: ReactNode;
}
export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const cartCtx: CartContextInterface = {
    cart: [],
  };
  return <CartContext value={cartCtx}>{children}</CartContext>;
}
