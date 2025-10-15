import { setToLocalStorage } from "../src/util/localStorage.ts";
import type { CartMeal } from "../types/types.ts";
type ReducerActionType = "ADD" | "REMOVE" | "CHANGEQUANTITY" | "RESET";
export type ReducerAction = {
  type: ReducerActionType;
  payload: {
    id: string;
    newQuantity?: number;
  };
};
export function cartReducer(
  state: CartMeal[],
  action: ReducerAction
): CartMeal[] {
  switch (action.type) {
    case "ADD": {
      const itemIndex = state.findIndex((meal) => {
        return meal.id === action.payload.id;
      });
      if (itemIndex === -1) {
        const newState = [
          ...state,
          {
            id: action.payload.id,
            quantity: 1,
          },
        ];
        setToLocalStorage("cart", newState);
        return newState;
      }
      const newState = [...state];
      newState[itemIndex] = {
        ...newState[itemIndex],
        quantity: newState[itemIndex].quantity + 1,
      };
      setToLocalStorage("cart", newState);
      return newState;
    }
    case "REMOVE": {
      const newState = state.filter((meal) => meal.id !== action.payload.id);
      setToLocalStorage("cart", newState);
      return newState;
    }
    case "CHANGEQUANTITY": {
      if (!action.payload.newQuantity) return state;
      const itemIndex = state.findIndex(
        (meal) => meal.id === action.payload.id
      );
      const newState = [...state];
      newState[itemIndex] = {
        ...newState[itemIndex],
        quantity: Number(action.payload.newQuantity),
      };
      setToLocalStorage("cart", newState);
      return newState;
    }
    case "RESET":
      setToLocalStorage("cart", []);
      return [];
  }
}
