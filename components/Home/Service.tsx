import React from "react";
import Image from "next/image";
import Link from "next/link";

import image1 from "../../assets/sevice1.png";
import image2 from "../../assets/service2.png";
import image3 from "../../assets/service3.png";
import image4 from "../../assets/service4.png";
import image5 from "../../assets/service5.png";
import bars from "../../assets/bar.svg";
import arrow from "../../assets/arrow-right.svg";
import GoodImg from "../../assets/good.svg";
import leaf from "../../assets/leaficon.svg";
import sun from "../../assets/sunicon.svg";
import eye from "../../assets/eyeicon.svg";
import pie from "../../assets/pie.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

interface ServiceProps {
  id: string;
  title: string;
  description: string;
  link: string;
  linkTitle: string;
  image: any;
}

const serviceCard: ServiceProps[] = [
  {
    id: "1",
    title: "Cool feature title",
    description: "Learning curve network effects return on investment.",
    link: "/",
    image: image1,
    linkTitle: "Explore page",
  },
  {
    id: "2",
    title: "Even cooler feature",
    description: "Learning curve network effects return on investment.",
    link: "/",
    image: image2,
    linkTitle: "Explore page",
  },
  {
    id: "3",
    title: "Cool feature title",
    description: "Learning curve network effects return on investment.",
    link: "/",
    image: image3,
    linkTitle: "Explore page",
  },
];

const Service = () => {
  return (
    <section className="mt-12">
      <article className="">
        <div className="text-center">
          <p className="text-gray-600 text-[1.25rem] font-sans">Our Services</p>
          <h3 className="font-man lg:text-[3rem] text-[2rem] px-7 lg:px-0">
            Handshake infographic mass market crowdfunding iteration.
          </h3>
        </div>
        <article className=" flex gap-2 justify-between mt-14 ">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 2,
              },
              700: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {serviceCard.map((service) => {
              return (
                <article key={service.id} className="">
                  <div className="flex lg:justify-between ">
                    <SwiperSlide>
                      <div className="mx-10 lg:mx-0">
                        <Image
                          src={service.image}
                          layout="responsive"
                          width={280}
                          height={320}
                          alt={service.title}
                        />
                        <div className=" py-4 pr-5">
                          <h4 className="font text-[1.5rem]">
                            {service.title}
                          </h4>
                          <p className="text-[1.25rem] py-2 text-gray-600">
                            {service.description}
                          </p>

                          <Link href={service.link}>
                            <a className="font-bold text-[1.25rem] border-b w-fit text-color-primary border-[#0A2640] flex ">
                              {service.linkTitle}
                              <Image
                                src={arrow}
                                alt="arrow"
                                width={24}
                                height={20}
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </article>
              );
            })}
          </Swiper>
        </article>
      </article>
      <section className="">
        <Service2 />
        <Service3 />
      </section>
    </section>
  );
};

interface Service2Props {
  card1: {
    id: string;
    title: string;
    image: any;
  }[];
  card2: {
    id: string;
    title: string;
    image: any;
  }[];
}

const service2Card: Service2Props = {
  card1: [
    {
      id: "1",
      title: "We connect our customers with the best",
      image: GoodImg,
    },
    {
      id: "2",
      title: "Advisor success customer launch party.",
      image: GoodImg,
    },
    {
      id: "3",
      title: "Business-to-consumer long tail.",
      image: GoodImg,
    },
  ],
  card2: [
    {
      id: "1",
      title: "We connect our customers with the best.",
      image: leaf,
    },
    {
      id: "2",
      title: "Advisor success customer launch party.",
      image: eye,
    },
    {
      id: "3",
      title: "Business-to-consumer long tail..",
      image: sun,
    },
  ],
};

export const Service2 = () => {
  return (
    <article className="lg:mt-20 mt-10 mb-14 font-sans">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-10">
        <div className="relative px-10 lg:px-0 w-full">
          <div className="w-full lg:w-[90%] ">
            <Image layout="responsive" src={image4} alt="service" />
          </div>
          <div className="absolute m-auto  left-[45%] z-[4] bg-white -translate-y-[14rem] p-4 shadow-md rounded-[12px] hidden lg:block">
            <Image src={bars} alt="service" width={170} height={170} />
            <p className="pl-4 font-bold text-color-primary text-[1.5rem]">
              30%
            </p>
            <p className=" pl-4 text-color-primary text-[0.875rem]">
              More income in June
            </p>
          </div>
        </div>
        <div className="lg:w-[85%] px-10 lg:px-0">
          <h3 className="font-man text-[2.25rem] pt-14 lg:pt-0">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h3>
          {service2Card.card1.map((card) => {
            return (
              <article key={card.id} className="flex gap-4 items-center py-3">
                <Image
                  src={card.image}
                  alt="service"
                  width={36}
                  height={36}
                ></Image>
                <p className="">{card.title}</p>
              </article>
            );
          })}
          <button className="text-center mt-5 font-bold text-white bg-color-primary px-[3.5rem] py-[1rem] rounded-[56px]">
            Start now
          </button>
        </div>
      </div>
    </article>
  );
};

export const Service3 = () => {
  return (
    <article className="lg:mt-32 mb-14 font-sans">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:gap-10 w-full">
        <div className="lg:w-[85%] px-10 lg:px-0">
          <h3 className="font-man text-[2.25rem] pt-14 lg:pt-0">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h3>
          {service2Card.card2.map((card) => {
            return (
              <article
                key={card.id}
                className="flex gap-4 items-center p-3 hover:bg-[#0A2640] hover:text-white rounded-[4px] my-2 transition-all duration-300"
              >
                <Image src={card.image} alt="service" width={24} height={24} />
                <p className="">{card.title}</p>
              </article>
            );
          })}
          <button className="text-center mt-5 font-bold text-white bg-color-primary px-[3.5rem] py-[1rem] rounded-[56px]">
            Start now
          </button>
        </div>
        <div className="relative px-10 lg:px-0 w-full">
          <div className="w-full lg:w-[90%] ml-auto">
            <Image layout="responsive" src={image5} alt="service" />
          </div>
          <div className="absolute m-auto font-man  right-[45%] z-[4] bg-white -translate-y-[13rem] p-4 shadow-md rounded-[12px] hidden lg:block">
            <Image src={pie} alt="service" width={170} height={160}></Image>
            <div className="px-2 flex gap-3 items-center py-1 text-[13px] ">
              <div className="w-[5px] h-[5px] bg-[#0DBBFC] rounded-full"></div>
              <p className="">35% - Agile Development</p>
            </div>
            <div className="px-2 flex gap-3 items-center py-1 text-[13px]">
              <div className="w-[5px] h-[5px] bg-[#69E6A6] rounded-full"></div>
              <p className="">30% - Investor bandwidth</p>
            </div>
            <div className="px-2 flex gap-3 items-center py-1 text-[13px]">
              <div className="w-[5px] h-[5px] bg-[#C4C4C4] rounded-full"></div>
              <p className="">35% - A/B testing </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Service;
