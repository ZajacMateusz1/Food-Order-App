import { useState } from "react";
import CartDetails from "./CartDetails.tsx";
import OrderForm from "./OrderForm.tsx";
import ThankYou from "./ThankYou.tsx";
import { Dialog } from "@mui/material";
export type StepType = "details" | "form" | "thankYou";
export default function OrderModal() {
  const [step, setStep] = useState<StepType>("details");
  function handleChangeStep(newStatus: StepType) {
    setStep(newStatus);
  }
  return (
    <Dialog open={true} fullWidth maxWidth="sm">
      {step === "details" && (
        <CartDetails handleChangeStep={handleChangeStep} />
      )}
      {step === "form" && <OrderForm handleChangeStep={handleChangeStep} />}
      {step === "thankYou" && <ThankYou />}
    </Dialog>
  );
}
