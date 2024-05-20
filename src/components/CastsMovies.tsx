"use client";
import { imageResize } from "@/api/constants";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Cast } from "../../typings";

type Props = {
  casts: Cast[];
};

const CastsMovies = ({ casts }: Props) => {
  return (
    <div className="">
      <h1 className="w-64 py-3 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {Array.isArray(casts) && casts.length === 0 ? "" : "Cast"}{" "}
      </h1>
      <ul>
        <Swiper
          slidesPerView={2}
          breakpoints={{
            300: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            880: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1470: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
            1900: {
              slidesPerView: 10,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {casts?.map((movie: any) => (
            <div key={movie.id}>
              <SwiperSlide>
                <Image
                  src={imageResize(movie.profile_path)}
                  alt="cast"
                  width={130}
                  height={0}
                  className="w-full h-auto object-cover rounded-xl"
                />
                <p className="text-orange text-center">{movie.name}</p>
                <p className="text-orange text-center">{movie.character}</p>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </ul>
    </div>
  );
};

export default CastsMovies;
