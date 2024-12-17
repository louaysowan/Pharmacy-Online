export interface User {
  id: string;
  email: string;
  name: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}