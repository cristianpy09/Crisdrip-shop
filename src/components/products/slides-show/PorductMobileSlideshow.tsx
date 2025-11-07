"use client";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";
import "./slideshow.css";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const PorductMobileSlideshow = ({ images, title, className }: Props) => {
  return (
    <div className={className}>
      <Swiper
        style={{
          width: "100vw",
          height: "500px",
        }}
        pagination
        autoplay={{
          delay: 2500,
        }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              src={`/products/${image}`}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "contain" }}
              loading="eager"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
