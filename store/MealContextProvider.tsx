import { type ReactNode, useEffect, useState } from "react";
import MealsContext from "./meals-context.tsx";
import type { MealsContextInterface } from "./meals-context.tsx";
import type { Meal } from "../types/types.ts";
import { fetchAllMeals } from "../http.ts";
interface MealsContextProviderProps {
  children: ReactNode;
}
export default function MealsContextProvider({
  children,
}: MealsContextProviderProps) {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    async function fetchMeals() {
      setIsLoading(true);
      try {
        const mealsData = await fetchAllMeals();
        setMeals(mealsData);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Can't fetch data! Try again later."
        );
      }
      setIsLoading(false);
    }
    fetchMeals();
  }, []);
  const mealsCtx: MealsContextInterface = {
    meals,
    error,
    isLoading,
  };
  return <MealsContext value={mealsCtx}>{children}</MealsContext>;
}
