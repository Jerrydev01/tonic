import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/Logo.svg";
import herobanner from "../../assets/herographic.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";

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
  const [nav, setNav] = useState(false);

  //toggle navigation menu for mobile in react?
  const handleNav = () => {
    if (nav) {
      setNav(false);
    } else {
      setNav(true);
    }
  };

  return (
    <section className="bgImageHero bg-color-primary xl:px-[6.25rem] lg:px-[4.25rem] relative font-sans">
      <nav className="py-5 flex justify-between items-center lg:w-full  px-[3rem]  m-auto bg-color-primary w-screen fixed top-0 left-0 xl:px-[6.25rem] lg:px-[4.25rem] z-[30]">
        <Image src={logo} alt="heroBanner" width={162.22} height={42} />
        <ul className="lg:flex lg:flex-row hidden justify-end items-center gap-6 text-white w-full">
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
        {/* mobile */}
        {nav ? (
          <div className="text-[2rem] bg-[#0A2640] w-screen z-[5]">
            <ul className="flex flex-col lg:hidden fixed bg-color-primary right-0 px-[7rem] h-screen top-0 justify-center items-center gap-6 text-white z-[10] shadow-md">
              <li className="">
                <Link href="">
                  <a className="hover:text-[#65E4A3] ">Product</a>
                </Link>
              </li>
              <li className="py-4">
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
              <li className="py-4">
                <Link href="">
                  <a className="bg-white text-color-primary py-[8px] px-[40px] rounded-[24px] border-2 border-white text-[1rem]">
                    Log In
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
        <button
          onClick={handleNav}
          className="lg:hidden z-[20] fixed right-10 text-white text-[2rem] mt-3"
        >
          {nav ? <AiOutlineClose /> : <AiOutlineMenuFold />}
        </button>
      </nav>
      <article className="flex flex-col lg:flex-row xl:flex-row pt-[7rem] items-center justify-between gap-10">
        <div className="font-sans lg:w-[50%] w-[80%] m-auto gid place-items-center text-center lg:m-0 lg:text-left ">
          <h3 className="font-man lg:text-[3rem] text-[2.8rem] text-white font-normal">
            Save time by building fast with Boldo Template{" "}
          </h3>
          <p className="text-[#F1F1F1] py-6 font-normal text-[1rem] xl:py-10">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className="flex gap-2 md:block justify-evenly text-[1rem]">
            <button className="bg-[#69E6A6] text-color-primary border-2 border-[#69E6A6] md:px-[3.5rem] px-[1.5rem] py-[0.8rem] md:py-[1rem] rounded-[56px] font-bold ">
              Buy template
            </button>
            <button className="md:px-[3.5rem] px-[2rem] ml-3  py-[0.8rem] md:py-[1rem] rounded-[56px] font-bold border-2 border-white text-white">
              Explore
            </button>
          </div>
        </div>
        <div className="lg:w-[55%] xl:w-[50%] w-[80%]">
          <Image
            src={herobanner}
            alt="herobanner"
            layout="responsive"
            width={493.86}
            height={423}
          ></Image>
        </div>
      </article>
      <article className="pt-10 pb-6 mt-5 gradient w-[80%] lg:w-full m-auto lg:m-0">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            300: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
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
