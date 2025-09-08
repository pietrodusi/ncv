import React from 'react';
import team from '../data/team.json';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ChiSiamo () {
  return (
   <section className="relative py-16 max-w-7xl mx-auto px-4" id="Ilnostroteam">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 md:mb-24">Il nostro team</h2>
      <Swiper
        modules={[Navigation]}
        loop={true}
        style={{
          "--swiper-navigation-color": "#1a6db5",
        }}
        spaceBetween={25}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        navigation
        className="px-2"
      >
        {team.map((member) => (
          <SwiperSlide
            key={member.id}
            className="flex-shrink-0 w-full sm:w-[350px] h-[420px] md:h-[500px] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col border-2 bg-ncvColor-grey/20"
          >
            {/* Staff photo */}
            <img
              src={member.image}
              alt={member.name}
              className="h-2/3 w-full object-cover filter grayscale hover:grayscale-0 transition duration-500 ease-in-out transform hover:scale-105"
            />
            {/* Text section */}
            <div className="flex flex-col items-center justify-center h-1/3 pt-0 px-2">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              <p className="text-gray-600 text-sm md:text-base mt-2 text-center">{member.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

