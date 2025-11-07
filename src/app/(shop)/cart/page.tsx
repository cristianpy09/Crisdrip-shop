import React from "react";
import Image from "next/image";
import Link from "next/link";
import Title from "@/components/ui/title/Title";
import QuantitySelector from "@/components/products/quantity-selector/QuantitySelector";
import { initialData } from "@/seed/seed";
import { redirect } from "next/navigation";

const productsInCart = [initialData.products[0]];

export default function CartPage() {
  // redirect("/empy")

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-full max-w-[1000px]">
        {/* Título */}
        <Title title="Carrito" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-5">
          {/* Carrito */}
          <div className="flex flex-col">
            <span className="text-xl font-semibold mb-2">
              Agregar más ítems
            </span>
            <Link href="/" className="underline text-blue-600 mb-5">
              Continuar comprando
            </Link>

            {/* Productos */}
            {productsInCart.map((product) => (
              <div key={product.slug} className="flex items-start mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  alt={product.title}
                  className="mr-5 rounded-md"
                />

                <div>
                  <p className="font-semibold">{product.title}</p>
                  <p className="text-gray-600">${product.price}</p>
                  <QuantitySelector quantity={3} />
                  <button className="underline mt-3 text-red-500 cursor-pointer ">
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Resumen de orden */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl font-semibold mb-4">Resumen de orden</h2>

            <div className="grid grid-cols-2 gap-y-2">
              <span>No. productos</span>
              <span className="text-right">3 artículos</span>

              <span>Subtotal</span>
              <span className="text-right">$100</span>

              <span>Impuestos (15%)</span>
              <span className="text-right">$15</span>

              <span className="text-2xl mt-5 font-bold">Total</span>
              <span className="text-2xl mt-5 text-right font-bold text-green-700">
                $115
              </span>
            </div>

            <div className="mt-8">
              <Link href="/checkout/address" className=" w-full flex justify-center">
                Ir al checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
