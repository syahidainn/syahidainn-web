"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Libre_Baskerville } from "next/font/google";
import "@/styles/globals.css";
import Head from "next/head";
import { useState, useEffect } from "react";

const libre_baskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const [color, setColor] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const changeColor = () => {
        if (window.scrollY <= 0) {
          setColor(true);
        } else {
          setColor(false);
        }
      };

      window.addEventListener("scroll", changeColor, true);

      // Cleanup untuk menghapus event listener
      return () => {
        window.removeEventListener("scroll", changeColor, true);
      };
    }
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={libre_baskerville.className}>
        <header
          className={`overflow-hidden md:mb-0 p-5 md:p-8 fixed w-full ${
            color ? "bg-transparent" : "bg-black"
          }`}
        >
          <Navbar />
        </header>
        <Component {...pageProps} />
        <footer className="mb-[68px] bg-gray-400 px-6 md:mb-0 md:px-8 h-20">
          <Footer />
        </footer>
      </div>
    </>
  );
}
