import type { CartMeal } from "../types/types.ts";
type ReducerActionType = "ADD" | "REMOVE" | "DECREMENT" | "RESET";
export type ReducerAction = {
  type: ReducerActionType;
  payload: string;
};
export function cartReducer(
  state: CartMeal[],
  action: ReducerAction
): CartMeal[] {
  switch (action.type) {
    case "ADD": {
      const itemIndex = state.findIndex((meal) => {
        return meal.id === action.payload;
      });
      if (itemIndex === -1) {
        return [
          ...state,
          {
            id: action.payload,
            quantity: 1,
          },
        ];
      }
      const newState = [...state];
      newState[itemIndex] = {
        ...newState[itemIndex],
        quantity: newState[itemIndex].quantity + 1,
      };
      return newState;
    }
    case "REMOVE": {
      const newState = state.filter((meal) => meal.id !== action.payload);
      return newState;
    }
    case "DECREMENT": {
      const itemIndex = state.findIndex((meal) => meal.id === action.payload);
      const newState = [...state];
      newState[itemIndex] = {
        ...newState[itemIndex],
        quantity: newState[itemIndex].quantity - 1,
      };
      return newState;
    }
    case "RESET":
      return [];
  }
}
