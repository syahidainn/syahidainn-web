import { formatNumber } from "@/lib/constants";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function RoomsItem({
  id,
  imageCard,
  tipe,
  katakata,
  desc,
  logoFacility,
  textFacility,
  harga,
  facilities, // Menambahkan prop facilities
  facilityLogos, // Menambahkan prop facilityLogos
  galleryImages, // Menambahkan prop galleryImages
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Router = useRouter();

  const rooms = [
    { image: "Deluxe Double.jpg", type: "Deluxe Double" },
    { image: "Deluxe Triple.jpg", type: "Deluxe Triple" },
    { image: "Superior Room.jpg", type: "Superior Room" },
    { image: "VIP Room.jpg", type: "VIP Room" },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? rooms.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % rooms.length);
  };

  const handleImageClick = (index) => {
    setCurrentIndex(index % rooms.length);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Section untuk cover kamar */}
      <section className="relative flex flex-col justify-center h-screen w-full">
        <Image
          src={`/assets/${imageCard}`}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="bg-black/30 w-full absolute flex items-center justify-center" />
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extralight font-poppins text-white absolute bottom-10 sm:bottom-20 left-0 right-0 text-center">
          {tipe}
        </h1>
        <div className="absolute bottom-8 sm:bottom-16 left-0 right-0 mx-auto w-1/2 sm:w-1/4 lg:w-1/12 h-0.5 bg-white"></div>
      </section>

      <div className="p-8 pb-20 sm:p-32">
        {/* Section untuk deskripsi kamar */}
        <section className="flex flex-col sm:flex-row gap-20 mb-10 mt-45 relative">
          <div className="w-full sm:w-1/2 h-[15rem] sm:h-[30rem] relative">
            <div className="absolute -left-4 -top-4 w-full h-full z-0 hidden sm:block">
              <Image
                src={imageCard}
                layout="responsive"
                width={500}
                height={500}
                className="opacity-50"
              />
            </div>
            <div className="relative z-10">
              <Image
                src={imageCard}
                layout="responsive"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-10 w-full sm:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl sm:text-4xl font-libre_baskerville">
                {tipe}
              </h1>
              <p className="text-base sm:text-lg text-black font-poppins italic font-medium mt-5">
                {katakata}
              </p>
              <p className="text-sm sm:text-lg text-justify font-poppins font-light mt-5">
                {desc}
              </p>
              <div className="flex flex-row flex-wrap gap-3 items-center mt-5">
                {logoFacility.map((item, index) => (
                  <div className="flex items-center gap-2" key={index}>
                    <Image
                      src={item}
                      width={30}
                      height={30}
                      className="w-6 sm:w-8 lg:w-10"
                    />
                    <p className="text-xs sm:text-base py-2 px-1 font-inter">
                      {textFacility[index]}
                    </p>
                  </div>
                ))}
                {/* <div className="flex items-center gap-2">
                  <Image
                    src={logoFacility1}
                    width={30}
                    height={30}
                    className="w-6 sm:w-8 lg:w-10"
                  />
                  <p className="text-xs sm:text-base py-2 px-1 font-inter">
                    {textFacility1}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={logoFacility2}
                    width={30}
                    height={30}
                    className="w-6 sm:w-8 lg:w-10"
                  />
                  <p className="text-xs sm:text-base py-2 px-1">
                    {textFacility2}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={logoFacility3}
                    width={30}
                    height={30}
                    className="w-5 sm:w-8 lg:w-7"
                  />
                  <p className="text-xs sm:text-base py-2 px-1">
                    {textFacility3}
                  </p>
                </div> */}
              </div>
              <h2 className="text-xl sm:text-2xl font-poppins text-center sm:text-left mt-5">
                <span className="font-bold">
                  IDR {formatNumber(harga)}
                  {/* {harga.split(" ")[0]} {harga.split(" ")[1]} */}
                </span>{" "}
                <span className="font-light">
                  / Night

                  {/* {harga.split(" ").slice(2).join(" ")} */}
                </span>
              </h2>
              <div className="flex justify-center sm:justify-start">
                <button
                  className="mt-4 px-6 py-2 bg-white border border-[#AE9578] text-[#AE9578] font-poppins"
                  type="button"
                  onClick={() => Router.push(`/booking/${id}`)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section untuk check-in/out */}
        <section className="flex flex-col sm:flex-row gap-20 mt-5 mb-40 w-screen -mx-8 sm:-mx-32 bg-[#F8F4EE] p-5">
          <div className="w-full h-auto p-5">
            <div className="flex flex-col sm:flex-row gap-5 text-center relative w-full items-center justify-center">
              <div className="flex-1 flex items-center justify-center gap-2 sm:gap-4">
                <Image
                  src="/assets/icon/clock.svg"
                  width={30}
                  height={30}
                  className="sm:w-[44px] sm:h-[44px]"
                />
                <div>
                  <h1 className="text-sm sm:text-lg font-semibold">Check-in</h1>
                  <p className="text-sm sm:text-lg">2:00 PM</p>
                </div>
              </div>
              <div className="hidden sm:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-14 w-0.5 bg-gray-400"></div>
              <div className="flex-1 flex items-center justify-center gap-2 sm:gap-4">
                <Image
                  src="/assets/icon/clock.svg"
                  width={30}
                  height={30}
                  className="sm:w-[44px] sm:h-[44px]"
                />
                <div>
                  <h1 className="text-sm sm:text-lg font-semibold">
                    Check-out
                  </h1>
                  <p className="text-sm sm:text-lg">12:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section untuk fasilitas tambahan */}
        <section className="flex flex-col gap-10 mx-auto mb-40">
          <h1 className="text-2xl sm:text-4xl text-center font-libre_baskerville">
            Facilities
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-0 gap-y-12 mt-10">
            {" "}
            {/* Menghapus gap-x untuk kolom */}
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-5 text-center font-poppins"
              >
                <Image src={facilityLogos[index]} width={50} height={50} />
                <p>{facility}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section untuk Gallery Room */}
        <section className="flex flex-col gap-10 mx-auto mb-40">
          <h2 className="text-2xl sm:text-4xl text-center font-libre_baskerville">
            Gallery Room
          </h2>
          <div className="flex flex-col sm:flex-row gap-2 mt-0">
            <div className="w-full sm:w-1/3 h-[20rem] sm:h-[30rem] bg-gray-300">
              <Image
                src={galleryImages[0]}
                layout="responsive"
                width={50}
                height={50}
                alt="Gallery Image 1"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 w-full sm:w-2/3">
              {galleryImages.slice(1, 7).map((image, index) => (
                <div key={index} className="bg-gray-300">
                  <Image
                    src={image}
                    layout="responsive"
                    width={50}
                    height={50}
                    alt={`Gallery Image ${index + 2}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section untuk ruangan lainnya */}
        <section className="flex flex-col sm:flex-row gap-5 w-full p-5">
          <div className="w-full sm:w-1/3 h-full p-5">
            <h1 className="text-3xl sm:text-5xl mb-5 font-libre_baskerville font-regular">
              More Rooms
            </h1>
            <p className="text-base sm:text-lg mb-5 font-poppins font-light text-justify">
              Syahida Inn menghadirkan berbagai pilihan kamar yang dirancang
              untuk memenuhi kebutuhan Anda, mulai dari perjalanan bisnis hingga
              liburan yang sempurna.
            </p>
            <div className="flex flex-row gap-5 justify-center sm:justify-start">
              <button onClick={handlePrev} className="text-3xl sm:text-5xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button onClick={handleNext} className="text-3xl sm:text-5xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full sm:w-2/3 p-5 flex items-center justify-start relative overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  (currentIndex % rooms.length) * 50
                }%)`,
              }}
            >
              {rooms.concat(rooms).map((room, index) => (
                <div
                  key={index}
                  className="w-full sm:w-2/4 flex-shrink-0 relative p-2"
                  onClick={() => handleImageClick(index)}
                >
                  <div
                    className={`bg-white shadow-md overflow-hidden ${
                      index % rooms.length !== currentIndex % rooms.length
                        ? "opacity-50 scale-90"
                        : ""
                    }`}
                  >
                    <Image
                      src={`/assets/${room.image}`}
                      width={1000}
                      height={1000}
                      alt={room.type}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 p-1 w-full mx-auto">
                      <h3 className="text-lg text-center font-poppins text-white">
                        {room.type}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Section untuk alamat dan reservasi */}
      <section className="flex flex-col sm:flex-row gap-5 mb-10 w-full bg-[#F8F4EE] p-5 h-auto sm:h-[200px]">
        <div className="w-full h-full p-5 pl-5 sm:pl-20">
          <h1 className="text-lg font-bold mb-5">Address</h1>
          <div className="flex items-center">
            <Image
              src="/assets/icon/lokasi.svg"
              width={24}
              height={24}
              className="mr-2"
            />
            <p className="text-base font-poppins">
              Jl. Kertamukti No.5, Cireundeu, Kec. Ciputat Tim., Kota Tangerang
              Selatan, Banten 15412
            </p>
          </div>
        </div>
        <div className="w-full h-full p-5 pl-5 sm:pl-20">
          <h2 className="text-lg font-bold mb-5">Call to reserve</h2>
          <div className="flex items-center">
            <Image
              src="/assets/icon/Phone.svg"
              width={24}
              height={24}
              className="mr-2"
            />
            <p className="text-base font-poppins">+62-823-117-1400</p>
          </div>
        </div>
      </section>
    </div>
  );
}
