"use client";

import { useCart } from "@/context/CartContext";
import SizeSelector from "@/components/products/size-selector/SizeSelector";
import QuantitySelector from "@/components/products/quantity-selector/QuantitySelector";
import { ValidSizes } from "@/interfaces/products.interface";

interface Props {
  product: {
    slug:string
    title: string;
    price: number;
    sizes: ValidSizes[];
    description: string;
    
  };
  img:string
}

export default function ProductActions({ product ,img}: Props) {
  const{slug}=product
 
  const { count, selectedSize, addToCart, images } = useCart();
const imagen = img
  const handleAddToCart = () => {
    if (!selectedSize) return alert("Selecciona una talla antes de continuar");

    addToCart({
      images:imagen,
      id:slug,
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
        className="btn-primary hover:bg-gray-400 transition-all my-5 px-4 py-2 rounded w-full cursor-pointer"
      >
        Agregar al carrito
      </button>

      <h3 className="font-bold text-sm">Descripción</h3>
      <p className="font-light">{product.description}</p>
    </div>
  );
}
