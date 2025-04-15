// src/lib/stores/cart.ts
import { writable } from "svelte/store";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export const cart = writable<Product[]>([]);
