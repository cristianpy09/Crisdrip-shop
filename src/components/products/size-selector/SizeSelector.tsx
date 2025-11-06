"use client"

import { ValidSizes } from '@/interfaces/products.interface'
import { initialData } from '@/seed/seed'
import clsx from 'clsx'
import React, { useState } from 'react'

interface Props {
    selectedSIze?:ValidSizes
    avalibleSize: ValidSizes[]
}
const products = initialData.products;
export default function SizeSelector( {selectedSIze,avalibleSize}:Props  ) {
    const [seleccionada,setSeleccionada] = useState(products.filter(product=>product.sizes[0]))

    

  return (
    <div className='my-5'  >

        <h3 className='font-bold mb-4' > Tallas disponibles  </h3>
        <div className='flex' >
            {avalibleSize.map(size=>(
                <button  key={size} className={
                    clsx(
                        'mx-2 hover:underline text-lg',
                        {
                            "underline": size === selectedSIze
                        }
                    )
                } >
                    
                    {size}
                </button>
            ))}


        </div>

    </div>
  )
}
