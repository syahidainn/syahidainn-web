import React, { useState, useEffect } from "react";

//buat isi konten di review
const reviews = [
  {
    id: 1,
    text: "A great place to stay for reasonable prices. Clean facilities, pretty comfortable room, spacious enough, and safe parking lot.",
    author: "Ensa Zundawan",
    backgroundImage: "/assets/Hero.png", // Tambahkan gambar latar belakang
  },

  {
    id: 2,
    text: "lorem ipsum",
    author: "Jackie Chan",
    backgroundImage: "/assets/Hero.png", // Tambahkan gambar latar belakang
  },

  {
    id: 3,
    text: "Anjay Keren Banget guys",
    author: "Jawir",
    backgroundImage: "/assets/Hero.png", // Tambahkan gambar latar belakang
  },
];

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slide, setSlide] = useState(true);

  // Efek otomatis untuk slide
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSlide(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        setSlide(true);
      }, 500); // Durasi animasi slide-out
    }, 5000); // Durasi perpindahan 5 detik

    return () => clearInterval(slideInterval);
  }, []);

  const prevSlide = () => {
    setSlide(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
      setSlide(true);
    }, 500); // Durasi animasi slide-out
  };

  const nextSlide = () => {
    setSlide(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
      setSlide(true);
    }, 500); // Durasi animasi slide-out
  };

  return (
    <div
      className="relative bg-cover bg-bottom  py-16 w-full "
      style={{
        backgroundImage: `url(${reviews[currentIndex].backgroundImage})`,
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/*content*/}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-white text-center px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-10 font-libre_baskerville border-b-[3px] border-white py-2">
          Review
        </h2>
        {/* <hr className="bg-white border-0 my-4 h-1 mx-auto w-24 md:w-48" /> */}
        <div
          className={`transition-transform duration-500 ${slide ? "transform translate-x-0" : "transform -translate-x-full"}`}
        >
          <p className="text-base md:text-xl italic mb-4 font-poppins">
            &quot;{reviews[currentIndex].text}&quot;
          </p>
          <p className="text-sm md:text-lg font-semibold font-poppins">
            - {reviews[currentIndex].author}
          </p>
        </div>
        <div className="mt-6 flex items-center justify-center space-x-4">
          {/*navigation and button*/}
          <button
            onClick={prevSlide}
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-2 md:px-4 cursor-pointer group focus:outline-none bg-transparent bg-opacity-30 hover:bg-opacity-50 text-white p-2 md:p-3 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 md:w-6 md:h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-2 md:px-4 cursor-pointer group focus:outline-none bg-transparent bg-opacity-30 hover:bg-opacity-50 text-white p-2 md:p-3 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 md:w-6 md:h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div className="mt-4 flex justify-center space-x-2">
          {reviews.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 rounded-full ${
                idx === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
