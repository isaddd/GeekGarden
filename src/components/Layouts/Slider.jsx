import React, { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/index.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { Navigation, Pagination } from "swiper/modules";

function Sliders() {
  useEffect(() => {
    AOS.init();
  }, []);
  const sliderItems = [
    {
      title1: "Lessons and insights",
      title2: "from 8 years",
      desc: "Where to grow your business as a photographer: site or social media?",
      buttonText: "Register",
      image: "/images/hero.png",
    },
    {
      title1: "Lessons and insights",
      title2: "from 8 years",
      desc: "Where to grow your business as a photographer: site or social media?",
      buttonText: "Register",
      image: "/images/hero.png",
    },
    {
      title1: "Lessons and insights",
      title2: "from 8 years",
      desc: "Where to grow your business as a photographer: site or social media?",
      buttonText: "Register",
      image: "/images/hero.png",
    },
  ];
  return (
    <div className="w-full md:h-[80vh] h-[85vh] bg-[#F5F7FA]" data-aos="fade-in">
      <Swiper
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
      >
        {sliderItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-screen-xl md:px-0 px-4 mx-auto py-20 md:flex items-center justify-between">
              <div className="md:w-1/2 md:text-left text-center md:mb-0 mb-5">
                <h2 className="md:text-6xl text-3xl">{item.title1}</h2>
                <h2 className="md:text-6xl text-3xl text-[#4CAF4F] mt-1">{item.title2}</h2>
                <p className="md:text-lg text-[#717171] mt-4">{item.desc}</p>
                <Button className="mt-6">{item.buttonText}</Button>
              </div>
              <div className="md:w-1/2 flex items-center md:justify-end justify-center">
                <img src={item.image} alt="Illustration" className="md:w-96 w-48" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Sliders;
