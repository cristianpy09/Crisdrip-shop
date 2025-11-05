"use client"

import { Product } from "@/interfaces/poruduc.interface";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
interface Props {
  product: Product;
}
export default function ProductGridItem({ product }: Props) {

  const [first,setFirs]=useState(product.images[0])
  const changeimage =(posicion:number)=>{
    setFirs(product.images[posicion])
  }

  return (
    <div className=" overflow-hidden fade-in">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/products/${first}`}
          alt={product.title}
          className="w-full object-cover "
          width={500}
          height={500}
          onMouseEnter={()=>changeimage(1)}
          onMouseLeave={()=>changeimage(0)}
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link className="hover:text-blue-500"  href={`/product/${product.slug}`}>{product.title}</Link>
        <span className="font-bold">${product.price}</span>
      </div>
    </div>
  );
}
