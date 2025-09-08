import React from 'react';
import team from '../data/team.json';
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ChiSiamo () {
  return (
   <section className="relative w-full py-16 w-[1500px] mx-auto" id="Ilnostroteam">
      <h2 className="text-4xl font-semibold text-center mb-[100px]">Il nostro team</h2>

      <Swiper
        modules={[Navigation]}
        loop={true}
        style={{
          "--swiper-navigation-color": "#1a6db5",
        }}
        spaceBetween={25}
        slidesPerView={"auto"}
        navigation
        className="px-4"
      >
        {team.map((member) => (
          <SwiperSlide
            key={member.id}
            className="flex-shrink-0 w-[350px] h-[600px] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col border-2 bg-ncvColor-grey/20 "
          >
            {/* Staff photo */}
            <img
              src={member.image}
              alt={member.name}
              className="h-3/4 w-full object-cover filter grayscale hover:grayscale-0 transition duration-500 ease-in-out transform hover:scale-105"
            />

            {/* Text section */}
            <div className="flex flex-col items-center justify-center h-1/4 pt-0 px-[10px]">
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              <p className="text-gray-600 text-m mt-2 text-center">{member.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

  );
};

