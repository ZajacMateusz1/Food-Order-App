export interface Meal {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}
export interface CartMeal {
  id: string;
  quantity: number;
}
export interface MealToShowInCartDetails extends Meal, CartMeal {}

export interface OrderData {
  clientData: Record<string, string>;
  cartData: MealToShowInCartDetails[];
  totalPrice: string;
}
