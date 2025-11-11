"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Tipado del producto (puedes ajustar según tu modelo)
interface CartItem {
  id:string
  size: string;
  quantity: number;
  images:string
}

// Tipado del contexto
interface CartContextProps {
  images:string
  setImages:(images: string) => void;
  id:string,
  setId:(size: string) => void;
  items: CartItem[];
  selectedSize: string;
  setSelectedSize: (size: string) => void;
    count: number;
  setCount: (count: number) => void;
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
}

// Crear el contexto
const CartContext = createContext<CartContextProps | undefined>(undefined);

// Hook para usarlo fácilmente
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};

// Proveedor del contexto
export const CartProvider = ({ children }: { children: ReactNode }) => {
  
  const [items, setItems] = useState<CartItem[]>([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [count, setCount] = useState<number>(1);
  const [id,setId]=useState("")
  const [images,setImages]=useState("")


  const addToCart = (item: CartItem) => {
    setItems((prev) => [...prev, item]);
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider
      value={{count, setCount, items, selectedSize, setSelectedSize, addToCart, clearCart ,id, setId,images,setImages}}
    >
      {children}
    </CartContext.Provider>
  );
};
