import { Suspense } from "react";
import OrderConfirmationScreen from "@/screens/OrderConfirmation";

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={null}>
      <OrderConfirmationScreen />
    </Suspense>
  );
}
