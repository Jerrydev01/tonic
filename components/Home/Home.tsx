import React from "react";
import Blog from "./Blog";
import Footer from "./Footer";
import Header from "./Header";
import Service from "./Service";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <section>
      <Header />
      <section className="xl:px-[9.375rem] lg:px-[4.375rem]">
        <Service />
      </section>
      <section className="mt-[8rem]">
        <Testimonials />
      </section>
      <section className="mt-[6rem] ">
        <Blog />
      </section>
      <section className="mt-[6rem] px-[4rem]">
        <Footer />
      </section>
    </section>
  );
};

export default Home;
