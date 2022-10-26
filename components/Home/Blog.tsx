import React from "react";
import Image from "next/image";
import Link from "next/link";

import image1 from "../../assets/blog1.png";
import image2 from "../../assets/blog2.png";
import image3 from "../../assets/blog3.png";
import img1 from "../../assets/blogs1.png";
import img2 from "../../assets/blogs2.png";
import img3 from "../../assets/blogs3.png";

const blogCards = [
  {
    id: "1",
    title: "Pitch termsheet backing validation focus release.",
    category: "Category",
    date: "November 22, 2021",
    image: image1,
    roundimg: img1,
    name: "Chandler Bing",
  },
  {
    id: "2",
    title:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    category: "Category",
    date: "November 22, 2021",
    image: image2,
    roundimg: img2,
    name: "Rachel Green",
  },
  {
    id: "3",
    title:
      "Beta prototype sales iPad gen-z marketing network effects value proposition.",
    category: "Category",
    date: "November 22, 2021",
    image: image3,
    roundimg: img3,
    name: "Monica Geller",
  },
];

const Blog = () => {
  return (
    <section className="">
      <section className="pb-10 xl:px-[9.375rem] lg:px-[4.375rem]">
        <div className="text-center font-man">
          <h5 className="font-sans text-gray-600">Our Blog</h5>
          <h3 className="text-[3rem]">
            Value proposition accelerator product management venture
          </h3>
        </div>
        <article className="mt-12 font-sans flex  justify-between gap-3">
          {blogCards.map((card) => (
            <Link href="/" key={card.id}>
              <a className="flex flex-col w-full">
                <div className="">
                  <Image
                    src={card.image}
                    alt={card.name}
                    layout="fixed"
                    width={300}
                    height={210}
                  />
                </div>
                <div className="pr-10 py-3 text-[1rem]">
                  <div className="flex gap-5 items gap-2 py-2">
                    <p className=" text-color-primary font-bold">
                      {card.category}
                    </p>
                    <p className="text-gray-600">{card.date}</p>
                  </div>
                  <p className="text-[1.25rem]">{card.title}</p>
                </div>
                <div className="flex gap-3 items-center">
                  <Image
                    src={card.roundimg}
                    alt={card.name}
                    width={32}
                    height={32}
                  />
                  <p className="text-[1rem]">{card.name}</p>
                </div>
              </a>
            </Link>
          ))}
        </article>
        <button className="font-sans text-color-primary font-bold px-[56px] py-[1rem] rounded-[56px] border-2 border-[#0A2640] text-center grid place-items-center m-auto mt-14">
          Load more
        </button>
      </section>
      <section className="mx-[4rem] bg-color-primary rounded-[12px] my-5">
        <EmailLetter />
      </section>
    </section>
  );
};

export const EmailLetter = () => {
  return (
    <div>
      <h3 className="text-[3rem] xl:w-[55%] lg:w-[75%] m-auto pt-8 font-man text-center text-white">
        An enterprise template to ramp up your company website
      </h3>
      <div className="font-sans">
        <form className="flex gap-3 xl:w-[55%] lg:w-[70%] m-auto pt-8 pb-10 px-10">
          <input
            className="rounded-[56px] px-[56px] w-[60%] py-[1rem] focus:bottom-0 focus:outline-none focus:ring-0 focus:border-transparent"
            id="email"
            placeholder="Your email address"
            type="email"
            required
          />
          <label
            className=" text-color-primary font-bold px-[56px] py-[1rem] rounded-[56px] border-2 border-[#65E4A3] text-center bg-[#65E4A3]"
            htmlFor="email"
          >
            Start now
          </label>
        </form>
      </div>
    </div>
  );
};

export default Blog;
