import { createContext } from "react";
import type { Meal } from "../types/types.ts";
export interface MealsContextInterface {
  meals: Meal[];
  error: string;
  isLoading: boolean;
}
const MealsContext = createContext<MealsContextInterface>({
  meals: [],
  error: "",
  isLoading: false,
});
export default MealsContext;
