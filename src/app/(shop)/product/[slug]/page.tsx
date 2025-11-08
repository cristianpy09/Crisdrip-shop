import { notFound } from "next/navigation";
import { initialData } from "@/seed/seed";
import { PorductMobileSlideshow } from "@/components/products/slides-show/PorductMobileSlideshow";
import { ProductSlide } from "@/components/products/slides-show/ProductSlide";
import { titleFont } from "@/confg/fonts";
import ProductActions from "@/components/products/ProductActions";


export default async function Productpage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = initialData.products.find((product) => product.slug === slug);
  if (!product) notFound();

  return (
    <div className="mt-8 mb-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
      {/* Imágenes del producto */}
      <div className="col-span-1 md:col-span-2">
        <PorductMobileSlideshow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />
        <ProductSlide
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>

      {/* Información del producto */}
      <div className="col-span-1">
        <h1 className={`${titleFont.className} font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-4">${product.price}</p>

        {/* Aquí renderizamos la parte interactiva */}
        <ProductActions product={product} />
      </div>
    </div>
  );
}
