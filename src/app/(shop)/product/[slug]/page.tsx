import ProductGrid from '@/components/products/product_grid/ProductGrid';
import Title from '@/components/ui/title/Title';
import { Product } from '@/interfaces/products.interface';
import { initialData } from '@/seed/seed';
import React from 'react'
const products = initialData.products;
export default async function Productpage({ params }: { params: Promise<{ slug: string }> }) {
  const {slug}= await params
  
  const Producto:Product[] = products.filter(producto => producto.slug===`${slug}`);
  
  return (
    <div>
      <>
             <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />
        
             <ProductGrid products={Producto} />
            </>
       </div>
  )
}
