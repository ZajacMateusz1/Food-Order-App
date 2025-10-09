import type { Meal, CartMeal, MealToShowInCartDetails } from "./types/types.ts";
export async function fetchAllMeals() {
  const response = await fetch(
    "https://68deea12898434f4135657cc.mockapi.io/foodorderapi/v1/meals"
  );
  if (!response.ok) {
    throw new Error("Can't fetch data! Try again later.");
  }
  const data: Meal[] = await response.json();
  return data;
}

export async function fetchInCart(cartItems: CartMeal[]) {
  const results: MealToShowInCartDetails[] = await Promise.all(
    cartItems.map(async (item) => {
      const response = await fetch(
        `https://68deea12898434f4135657cc.mockapi.io/foodorderapi/v1/meals/${item.id}`
      );
      if (!response.ok) {
        throw new Error("Can't fetch data! Try again later.");
      }
      const data = await response.json();
      data.quantity = item.quantity;
      return data;
    })
  );
  return results;
}
