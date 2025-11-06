import ProductGrid from '@/components/products/product_grid/ProductGrid';
import QuantitySelector from '@/components/products/quantity-selector/QuantitySelector';
import SizeSelector from '@/components/products/size-selector/SizeSelector';
import { ProductSlide } from '@/components/products/slides-show/ProductSlide';

import Title from '@/components/ui/title/Title';
import { titleFont } from '@/confg/fonts';
import { Product } from '@/interfaces/products.interface';
import { initialData } from '@/seed/seed';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function Productpage({ params }: { params: Promise<{ slug: string }> }) {
  const {slug}= await params
  
 

  const product = initialData.products.find(product => product.slug === slug)
  if (!product) {
    notFound()
  }
  return (
    <div className='mt-5 mb-20 grid md:grid-cols-3 gap-3'>
      {/**imagenes del producto */}
      <div className='col-span-1 md:col-span-2' >
        <ProductSlide title={product.title} images={product.images} />
      </div>

        {/**Informacion del producto */}
        <div className='col-span-1 px-5 ' >
            <h1 className={`${titleFont.className} antialiased font-bold text-xl `} >
              {product.title}
            </h1>
            <p className='text-lg mb-5' > ${product.price} </p>
              {/**selector de tallas */}
              <SizeSelector selectedSIze={product.sizes[0]}  avalibleSize={product.sizes} />

              {/**selector de cantidad */}

              <QuantitySelector quantity={2} />

            <button className='btn-primary my-5 cursor-pointer bg-gray-300 p-2 rounded' >
                Agregar al carrito
            </button>

          {/**descripcion */}
            <h3 className='font-bold text-sm' >Descripcion</h3>
            <p className='font-light' > 
              {product.description}
            </p>
        </div>
    </div>
  )
}




