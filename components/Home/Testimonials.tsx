import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import nextEl from "../../assets/nexticon.svg";
import prevEl from "../../assets/previcon.svg";
import test1 from "../../assets/testim1.svg";
import test2 from "../../assets/testim2.svg";
import test3 from "../../assets/testim3.svg";
import banner2 from "../../assets/hero2.png";
import down from "../../assets/down.svg";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";

// swiper custom navigation?

// import required modules
import { Navigation } from "swiper";

interface Testimony {
  title: string;
  name: string;
  position: string;
  id: string;
  image: any;
}

const testimonies: Testimony[] = [
  {
    id: "1",
    title:
      "Buyer buzz partner network disruptive non-disclosure agreement business",
    name: "Albus Dumbledore",
    position: "Manager @ Howarts",
    image: test1,
  },
  {
    id: "2",
    title:
      "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
    name: "Severus Snape",
    position: "Manager @ Slytherin",
    image: test2,
  },
  {
    id: "3",
    title:
      "“Release facebook responsive web design business model canvas seed money monetization.”",
    name: "Harry Potter",
    position: "Team Leader @ Gryffindor",
    image: test3,
  },
  {
    id: "4",
    title:
      "Buyer buzz partner network disruptive non-disclosure agreement business",
    name: "Albus Dumbledore",
    position: "Manager @ Howarts",
    image: test1,
  },
  {
    id: "5",
    title:
      "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
    name: "Severus Snape",
    position: "Manager @ Slytherin",
    image: test2,
  },
];
const Testimonials = () => {
  return (
    <section className="mb-14">
      <section className=" relative bg-color-primary xl:px-[9.375rem] lg:px-[4.375rem] px-[2.5rem] py-14">
        <h3 className="font-man text-white lg:text-[3rem] text-[1.8rem] font-normal lg:w-[65%] pb-8 lg:pb-0">
          An enterprise template to ramp up your company website
        </h3>
        <div className="absolute  z-[2] flex gap-6 md:right-10 md:top-0 md:translate-y-[7rem]  translate-y-[-1rem] md:-translate-x-28">
          <div className="swiper-button-prev cursor-pointer">
            <Image src={prevEl} alt="prev" width={72} height={72} />
          </div>
          <div className="swiper-button-next cursor-pointer">
            <Image src={nextEl} alt="next" width={72} height={72} />
          </div>
        </div>
        <article className="">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            modules={[Navigation]}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              708: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            <article className="font-sans">
              {testimonies.map((card) => {
                return (
                  <div key={card.id}>
                    <SwiperSlide key={card.id}>
                      <div className="bg-white p-5 mt-8 rounded-[12px] shadow-lg">
                        <p className="text-[1.5rem]">{card.title}</p>
                        <div className="flex items-center gap-3 mt-6 ">
                          <div className="">
                            <Image
                              alt="{card.title}"
                              src={card.image}
                              width={58}
                              height={58}
                            />
                          </div>
                          <div className="text-color-primary">
                            <p className=" font-bold text-[1rem]">
                              {card.name}
                            </p>
                            <small className="">{card.position}</small>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                );
              })}
            </article>
          </Swiper>
        </article>
      </section>
      <Customer />
    </section>
  );
};

export const Customer = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isShow2, setIsShow2] = useState<boolean>(false);

  const handleShow = () => {
    if (isShow) {
      setIsShow(false);
      setIsShow2(false);
    } else {
      setIsShow(true);
      setIsShow2(false);
    }
  };
  const handleShow2 = () => {
    if (isShow2) {
      setIsShow2(false);
      setIsShow(false);
    } else {
      setIsShow2(true);
      setIsShow(false);
    }
  };

  return (
    <section className="xl:px-[9.375rem] lg:px-[4.375rem] pt-16 px-[2.5rem]">
      <article className="">
        <div className="">
          <Image src={banner2} alt="service" width={1100} height={403} />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 pt-8">
            <h3 className="font-man text-[1.8rem] lg:text-[2.25rem] lg:w-[50%]">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h3>
            <div className="text-[1.25rem]">
              <div className="py-3 border-b  cursor-pointer">
                <div
                  onClick={handleShow}
                  className="flex gap-4 items-center justify-between"
                >
                  <p className="">We connect our customers with the best?</p>
                  {isShow ? (
                    <div className="rotate-180">
                      <Image
                        src={down}
                        alt="arrowdown"
                        width={28}
                        height={28}
                      />
                    </div>
                  ) : (
                    <Image src={down} alt="arrowdown" width={28} height={28} />
                  )}
                </div>
                {isShow ? (
                  <ul
                    onClick={() => setIsShow(false)}
                    className="list-disc pl-5 text-[.8125rem]"
                  >
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Quisquam corporis earum laboriosam!</li>
                    <li>Porro esse libero quia?</li>
                  </ul>
                ) : null}
              </div>
              <div className="py-3 border-b  cursor-pointer">
                <div
                  onClick={handleShow2}
                  className="flex gap-4 items-center justify-between"
                >
                  <p className="">Android research & development rockstar?</p>
                  {isShow2 ? (
                    <div className="rotate-180">
                      <Image
                        src={down}
                        alt="arrowdown"
                        width={28}
                        height={28}
                      />
                    </div>
                  ) : (
                    <Image src={down} alt="arrowdown" width={28} height={28} />
                  )}
                </div>
                {isShow2 ? (
                  <ul
                    onClick={() => setIsShow2(false)}
                    className="list-disc pl-5 text-[.8125rem]"
                  >
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Quisquam corporis earum laboriosam!</li>
                    <li>Porro esse libero quia?</li>
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Testimonials;
