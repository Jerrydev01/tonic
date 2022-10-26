import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import HomeSec from "../components/Home/Home";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Tonic</title>
        <meta name="description" content="Tonic web app test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="font-man">
          <HomeSec />
        </section>
      </main>
    </div>
  );
};

export default Home;
