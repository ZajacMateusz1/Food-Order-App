import type { CartMeal, Meal } from "../types/types.ts";
type ReducerActionType = "ADD" | "REMOVE";
export type ReducerAction = {
  type: ReducerActionType;
  payload?: number | Meal;
};
export function cartReducer(
  state: CartMeal[],
  action: ReducerAction
): CartMeal[] {
  switch (action.type) {
    case "ADD": {
      if (action.payload === undefined || typeof action.payload === "number")
        return state;
      const newState = [...state, { ...action.payload, quantity: 1 }];
      return newState;
    }
    case "REMOVE": {
      return state;
    }
  }
}
