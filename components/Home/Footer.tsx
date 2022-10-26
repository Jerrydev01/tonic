import React from "react";
import Image from "next/image";
import Link from "next/link";

import logoBlack from "../../assets/Logoblack.svg";

const Footer = () => {
  return (
    <section className="lg:flex font-sans items-center grid grid-cols-2 lg:gap-[6rem] gap-5 text-gray-600 pb-7">
      <div className="lg:w-[30%]">
        <Image src={logoBlack} alt="logo" width={156} height={41} />
        <p className="pt-4 pb-10">
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </p>
        <p className="">All rights reserved.</p>
      </div>
      <div className="px-5">
        <ul className="">
          <li className="font-bold text-color-primary pb-3">
            <Link href="">
              <a className="hover:text-[#65E4A3] ">Landings</a>
            </Link>
          </li>
          <li className="">
            <Link href="">
              <a className="hover:text-[#65E4A3] ">Home</a>
            </Link>
          </li>
          <li className="py-4">
            <Link href="">
              <a className="hover:text-[#65E4A3] ">Products</a>
            </Link>
          </li>
          <li className="">
            <Link href="">
              <a className="hover:text-[#65E4A3] ">Services</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="">
        <ul className="">
          <li className="font-bold text-color-primary pb-3">
            <Link href="">
              <a className="hover:text-[#65E4A3] ">Company</a>
            </Link>
          </li>
          <li className="">
            <Link href="">
              <a className="hover:text-[#65E4A3] ">Home</a>
            </Link>
          </li>
          <li className="relative py-4">
            <Link href="">
              <a className="flex gap-3 hover:text-[#65E4A3] ">
                Careers
                <span className="bg-[#65E4A3] text-color-primary p-2 rounded-[50px] absolute text-[12px] right-0 -translate-y-1 lg:translate-x-10">
                  Hiring!
                </span>
              </a>
            </Link>
          </li>
          <li className="">
            <Link href="">
              <a className="hover:text-[#65E4A3] ">Services</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="pl-5 lg:pl-0">
        <ul className="">
          <li className="font-bold text-color-primary pb-3">
            <Link href="">
              <a className="hover:text-[#65E4A3] ">Resources</a>
            </Link>
          </li>
          <li className="">
            <Link href="">
              <a className="hover:text-[#65E4A3] ">Blog</a>
            </Link>
          </li>
          <li className="py-4">
            <Link href="">
              <a className="hover:text-[#65E4A3] ">Products</a>
            </Link>
          </li>
          <li className="">
            <Link href="">
              <a className="hover:text-[#65E4A3] ">Services</a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
