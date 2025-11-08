"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Tipado del producto (puedes ajustar según tu modelo)
interface CartItem {
  
  size: string;
  quantity: number;
}

// Tipado del contexto
interface CartContextProps {
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



  const addToCart = (item: CartItem) => {
    setItems((prev) => [...prev, item]);
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider
      value={{count, setCount, items, selectedSize, setSelectedSize, addToCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
