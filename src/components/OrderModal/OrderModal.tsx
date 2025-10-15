import { useState, use, useMemo } from "react";
import CartContext from "../../../store/cart-context.tsx";
import useFetchPromiseAll from "../../hooks/useFetchPromiseAll.ts";
import { fetchInCart } from "../../../http.ts";
import CartDetails from "./CartDetails.tsx";
import OrderFormState from "./OrderFormState.tsx";
import { postOrder } from "../../../http.ts";
import usePost from "../../hooks/usePost.ts";
// import OrderFormAction from "./OrderFormAction.tsx";
import ThankYou from "./ThankYou.tsx";
import type {
  CartMeal,
  MealToShowInCartDetails,
  OrderData,
} from "../../../types/types.ts";
import { Dialog } from "@mui/material";
import ShowOrders from "./ShowOrders.tsx";
export type StepType = "details" | "form" | "thankYou" | "orders";
export default function OrderModal() {
  const [step, setStep] = useState<StepType>("details");
  function handleChangeStep(newStatus: StepType) {
    setStep(newStatus);
  }
  const {
    cartState,
    handleAddToCart,
    handleRemoveFromCart,
    handleChangeQuantity,
    handleReset,
    modalStatus,
    handleCloseModal,
  } = use(CartContext);
  const {
    data: mealsInCart,
    error,
    isLoading,
  } = useFetchPromiseAll<MealToShowInCartDetails[], CartMeal[]>(
    fetchInCart,
    cartState,
    []
  );
  const {
    sendData: sendOrder,
    responseData: orderResponse,
    error: orderError,
    isPending: orderIsPending,
  } = usePost(postOrder, {} as OrderData);
  const totalPrice: string = useMemo(() => {
    const price: number = mealsInCart.reduce(
      (acc, meal) => acc + meal.price * meal.quantity,
      0
    );
    return price.toFixed(2);
  }, [mealsInCart]);
  function handleClose() {
    handleCloseModal();
    handleChangeStep("details");
  }
  return (
    <Dialog
      open={modalStatus}
      fullWidth
      maxWidth="sm"
      container={document.getElementById("modal-root")!}
    >
      {step === "details" && (
        <CartDetails
          handleChangeStep={handleChangeStep}
          mealsInCart={mealsInCart}
          error={error}
          isLoading={isLoading}
          totalPrice={totalPrice}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleChangeQuantity={handleChangeQuantity}
          handleReset={handleReset}
          handleCloseModal={handleCloseModal}
        />
      )}
      {step === "form" && (
        <OrderFormState
          sendOrder={sendOrder}
          orderIsPending={orderIsPending}
          mealsInCart={mealsInCart}
          handleChangeStep={handleChangeStep}
          totalPrice={totalPrice}
          handleReset={handleReset}
          handleCloseModal={handleCloseModal}
        />
      )}
      {step === "thankYou" && (
        <ThankYou
          orderResponse={orderResponse}
          orderError={orderError}
          handleChangeStep={handleChangeStep}
          handleClose={handleClose}
        />
      )}
      {step === "orders" && <ShowOrders handleClose={handleClose} />}
    </Dialog>
  );
}
