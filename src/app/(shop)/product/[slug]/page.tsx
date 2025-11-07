import QuantitySelector from "@/components/products/quantity-selector/QuantitySelector";
import SizeSelector from "@/components/products/size-selector/SizeSelector";
import { PorductMobileSlideshow } from "@/components/products/slides-show/PorductMobileSlideshow";
import { ProductSlide } from "@/components/products/slides-show/ProductSlide";

import { titleFont } from "@/confg/fonts";

import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import React from "react";

export default async function Productpage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = initialData.products.find((product) => product.slug === slug);
  if (!product) {
    notFound();
  }
  return (
    <div className="mt-8 mb-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
      {/**imagenes del producto */}
      <div className="col-span-1  md:col-span-2  ">

        {/**slide mobile */}
          <PorductMobileSlideshow title={product.title} images={product.images} className="block md:hidden  " />




        {/**slide escritorio */}
        <ProductSlide title={product.title} images={product.images} className="hidden md:block" />
      </div>

      {/**Informacion del producto */}
      <div className="col-span-1   ">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl `}>
          {product.title}
        </h1>
        <p className="text-lg m-"> ${product.price} </p>
        {/**selector de tallas */}
        <SizeSelector
          selectedSIze={product.sizes[0]}
          avalibleSize={product.sizes}
        />

        {/**selector de cantidad */}

        <QuantitySelector quantity={1} />

        <button className="btn-primary my-5 cursor-pointer bg-gray-300 p-2 rounded">
          Agregar al carrito
        </button>

        {/**descripcion */}
        <h3 className="font-bold text-sm">Descripcion</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
