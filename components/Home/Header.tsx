import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/Logo.svg";
import herobanner from "../../assets/herographic.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import image1 from "../../assets/Logo1.svg";
import image2 from "../../assets/Logo2.svg";
import image3 from "../../assets/Logo3.svg";
import image4 from "../../assets/Logo4.svg";
import bgeclipse from "../../assets/Ellipse9.svg";

const Header = () => {
  const [theme, setTheme] = useState("light");


  return (
    <section className="bgImageHero bg-color-primary xl:px-[6.25rem] lg:px-[4.25rem] font-sans">
      <div className="py-5 flex justify-between items-center w-full">
        <Image src={logo} alt="heroBanner" width={162.22} height={42}></Image>
        <ul className="flex justify-center items-center gap-6 text-white">
          <li className="">
            <Link href="">
              <a className="hover:text-[#65E4A3] ">Product</a>
            </Link>
          </li>
          <li className="">
            <Link href="">
              <a className="hover:text-[#65E4A3] ">Services</a>
            </Link>
          </li>
          <li className="">
            <Link href="">
              <a className="hover:text-[#65E4A3] ">About</a>
            </Link>
            {/* <button>Toggle theme</button> */}
          </li>
          <li className="">
            <Link href="">
              <a className="bg-white text-color-primary py-[8px] px-[40px] rounded-[24px] border-2 border-white">
                Log In
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <article className="flex mt-7 items-center justify-between gap-8">
        <div className="font-sans w-[50%]">
          <h3 className="font-man text-[3rem] text-white font-normal">
            Save time by building fast with Boldo Template{" "}
          </h3>
          <p className="text-[#F1F1F1] py-6 font-normal text-[1rem]">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <button className="bg-[#69E6A6] text-color-primary border-2 border-[#69E6A6] px-[3.5rem] py-[1rem] rounded-[56px] font-bold ">
            Buy template
          </button>
          <button className="px-[3.5rem] ml-3 py-[1rem] rounded-[56px] font-bold border-2 border-white text-white">
            Explore
          </button>
        </div>
        <div className="">
          <Image
            src={herobanner}
            alt="herobanner"
            width={493.86}
            height={423}
          ></Image>
        </div>
      </article>
      <article className="py-5 mt-5 gradient">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper gradient"
        >
          <SwiperSlide>
            <div className="">
              <Image alt="img1" src={image1} width={200.51} height={41.29} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <Image alt="img1" src={image2} width={200.51} height={41.29} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <Image alt="img1" src={image3} width={200.51} height={41.29} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <Image alt="img1" src={image4} width={200.51} height={41.29} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <Image alt="img1" src={image1} width={200.51} height={41.29} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <Image alt="img1" src={image3} width={200.51} height={41.29} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <Image alt="img1" src={image2} width={200.51} height={41.29} />
            </div>
          </SwiperSlide>
        </Swiper>
      </article>
    </section>
  );
};






export default Header;
