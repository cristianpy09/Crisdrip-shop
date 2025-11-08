"use client";

import { useCart } from "@/context/CartContext";
import SizeSelector from "@/components/products/size-selector/SizeSelector";
import QuantitySelector from "@/components/products/quantity-selector/QuantitySelector";
import { ValidSizes } from "@/interfaces/products.interface";

interface Props {
  product: {
    title: string;
    price: number;
    sizes: ValidSizes[];
    description: string;
  };
}

export default function ProductActions({ product }: Props) {
  const { count, selectedSize, addToCart, items } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize) return alert("Selecciona una talla antes de continuar");

    addToCart({
      size: selectedSize,
      quantity: count,
    });

    alert(`Agregado al carrito: ${count}x ${product.title} (${selectedSize})`);
  };

  return (
    <div>
      <SizeSelector avalibleSize={product.sizes} />
      <QuantitySelector quantity={1} />

      <button
        onClick={handleAddToCart}
        className="bg-gray-300 hover:bg-gray-400 transition-all my-5 px-4 py-2 rounded w-full"
      >
        Agregar al carrito
      </button>

      <h3 className="font-bold text-sm">Descripción</h3>
      <p className="font-light">{product.description}</p>
    </div>
  );
}
