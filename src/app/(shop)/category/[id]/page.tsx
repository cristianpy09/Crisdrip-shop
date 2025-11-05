import ProductGrid from "@/components/products/product_grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { Product } from "@/interfaces/products.interface";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

const products = initialData.products;

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;

  const product: Product[] = products.filter(
    (producto) => producto.gender === id
  );

  // if (producto.gender==="men") {
  //  const title="Tienda"
  // }
  // if (id!= "men"||"women"||"kid") {
  //   notFound()
  // }
  return (
    <div>
      {id === "men" && (
        <Title
          title="Hombres"
          subtitle="Todos los productos"
          className="mb-2"
        />
      )}
      {id === "women" && (
        <Title
          title="Mujeres"
          subtitle="Todos los productos"
          className="mb-2"
        />
      )}
      {id === "kid" && (
        <Title title="Niños" subtitle="Todos los productos" className="mb-2" />
      )}

      <ProductGrid products={product} />
    </div>
  );
}
