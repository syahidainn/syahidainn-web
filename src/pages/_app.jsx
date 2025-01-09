"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Head from "next/head";
import { useState, useEffect } from "react";
import { libre_baskerville, libre_caslon_text } from "../lib/fonts";

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
      <div
        className={`${libre_baskerville.variable} ${libre_caslon_text.variable}`}
      >
        <header
          className={` border-b-2 border-b-black z-50 text-black uppercase overflow-hidden md:mb-0 p-7 px-32 fixed w-full ${
            color
              ? "bg-white/80 backdrop-blur-sm"
              : "bg-white/100 backdrop-blur-sm text-black"
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
