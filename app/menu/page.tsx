import { Suspense } from "react";
import MenuScreen from "@/screens/Menu";

export default function MenuPage() {
  return (
    <Suspense fallback={null}>
      <MenuScreen />
    </Suspense>
  );
}
