import React from "react";
import Image from "next/image";

import Title from "@/components/ui/title/Title";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import { IoCarOutline } from "react-icons/io5";

const productsInCart = [initialData.products[0]];

interface Props {
  params: { id: string|number };
}

export default async function OrderIdPage({ params }: Props) {
  const { id } = await params;
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-full max-w-[1000px]">
        {/* Título */}
        <Title title={` Orden #${id} `} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-5">
          {/* Carrito */}
          <div className="flex flex-col">
            <div
              className={clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-500": false,
                  "bg-green-700": true,
                }
              )}
            >
              <IoCarOutline size={30} />
              {/* <span className="mx-2" >Pendiendte</span> */}
              <span className="mx-2"> Pagada</span>
            </div>

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
                  <p className="text-gray-600">${product.price} x 3</p>
                  <p className="text-gray-1000">
                    Subtotal: ${product.price * 3}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Resumen de orden */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2 font-bold">DIreccion de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Cristian celis</p>
              <p>CrA#DAFAF</p>
              <p>centro</p>
              <p>24242332</p>
            </div>
            {/** divisor */}
            <div className="w-full h-0.5 rounded bg-gray-200" />

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
              <div
                className={clsx(
                  "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                  {
                    "bg-red-500": false,
                    "bg-green-700": true,
                  }
                )}
              >
                <IoCarOutline size={30} />
                {/* <span className="mx-2" >Pendiendte</span> */}
                <span className="mx-2"> Pagada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
