export interface Meal {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}
export interface CartMeal extends Meal {
  quantity: number;
}
