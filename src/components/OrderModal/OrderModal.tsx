import { useState, use, useMemo } from "react";
import CartContext from "../../../store/cart-context.tsx";
import useFetchPromiseAll from "../../hooks/useFetchPromiseAll.ts";
import { fetchInCart } from "../../../http.ts";
import CartDetails from "./CartDetails.tsx";
import OrderForm from "./OrderForm.tsx";
import ThankYou from "./ThankYou.tsx";
import type {
  CartMeal,
  MealToShowInCartDetails,
} from "../../../types/types.ts";
import { Dialog } from "@mui/material";
export type StepType = "details" | "form" | "thankYou";
export default function OrderModal() {
  const [step, setStep] = useState<StepType>("details");
  function handleChangeStep(newStatus: StepType) {
    setStep(newStatus);
  }
  const {
    cartState,
    handleAddToCart,
    handleRemoveFromCart,
    handleDecrement,
    modalStatus,
    handleCloseModal,
  } = use(CartContext);
  const {
    data: meals,
    error,
    isLoading,
  } = useFetchPromiseAll<MealToShowInCartDetails[], CartMeal[]>(
    fetchInCart,
    cartState,
    []
  );
  const totalPrice: string = useMemo(() => {
    const price: number = meals.reduce(
      (acc, meal) => acc + meal.price * meal.quantity,
      0
    );
    return price.toFixed(2);
  }, [meals]);
  return (
    <Dialog open={modalStatus} fullWidth maxWidth="sm">
      {step === "details" && (
        <CartDetails
          handleChangeStep={handleChangeStep}
          meals={meals}
          error={error}
          isLoading={isLoading}
          totalPrice={totalPrice}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleDecrement={handleDecrement}
          handleCloseModal={handleCloseModal}
        />
      )}
      {step === "form" && (
        <OrderForm
          handleChangeStep={handleChangeStep}
          totalPrice={totalPrice}
          handleCloseModal={handleCloseModal}
        />
      )}
      {step === "thankYou" && <ThankYou handleCloseModal={handleCloseModal} />}
    </Dialog>
  );
}
