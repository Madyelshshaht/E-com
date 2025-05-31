import { TProduct } from "./product";

export type TOrderItem = {
    id:number;          // id Product
    // userId:number;      // user Id
    items: TProduct[];  // Items in cart
    subtotal: number;   // Subtotal
}