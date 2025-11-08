"use client";

import { useCart } from "@/context/CartContext";
import { ValidSizes } from "@/interfaces/products.interface";
import { initialData } from "@/seed/seed";
import clsx from "clsx";

interface Props {
  avalibleSize: ValidSizes[];
}

export default function SizeSelector({ avalibleSize }: Props) {
  const { selectedSize, setSelectedSize } = useCart();

  return (
    <div className="my-5">
      <h3 className="font-bold mb-4"> Tallas disponibles </h3>
      <div className="flex">
        {avalibleSize.map((size) => (
          <button
            onClick={() => {
              setSelectedSize(size);
            }}
            key={size}
            className={clsx("mx-2 hover:underline text-lg cursor-pointer", {
              "underline font-semibold text-blue-600": selectedSize === size,
              "hover:underline text-gray-700": selectedSize !== size,
            })}
          >
            {size}
          </button>
        ))}
      </div>
      
    </div>
  );
}
