import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import Form from "next/form";

export default function BookingPage() {
  const params = useParams();
  const slug = params?.slug;

  const rooms = [
    {
      id: 1,
      imageCard: "/assets/Deluxe Double.jpg",
      tipe: "Deluxe Double",
      desc: "Nikmati pengalaman menginap yang menenangkan di Deluxe Double Room, tempat di mana kesederhanaan bertemu dengan keanggunan...",
      harga: " 400,000",
      logoFacility: [
        "/assets/icon/bed.svg",
        "/assets/icon/guest.svg",
        "/assets/icon/ukuran.svg",
      ],
      textFacility: ["Twin Bed", "2 Guests", "42㎡ – 45㎡"],
    },
    {
      id: 2,
      imageCard: "/assets/Deluxe Triple.jpg",
      tipe: "Deluxe Triple",
      desc: "Memberikan pengalaman menginap yang tak terlupakan dengan fasilitas unggulan dengan tiga tempat tidur yang nyaman dan...",
      harga: " 500,000",
      logoFacility: [
        "/assets/icon/bed.svg",
        "/assets/icon/guest.svg",
        "/assets/icon/ukuran.svg",
      ],
      textFacility: ["Three Bed", "3 Guests", "42㎡ – 45㎡"],
    },

    {
      id: 3,
      imageCard: "/assets/SUPERIOR Aset 1.jpg",
      tipe: "Superior Double",
      desc: "Pilihan ideal bagi Anda yang menginginkan kenyamanan berkelas dengan harga yang bersaing. Superior Room dirancang dengan gaya modern...",
      harga: " 600,000",
      logoFacility: [
        "/assets/icon/bed.svg",
        "/assets/icon/guest.svg",
        "/assets/icon/ukuran.svg",
      ],
      textFacility: ["Twin Bed", "2 Guests", "42㎡ – 45㎡"],
    },

    {
      id: 4,
      imageCard: "/assets/VIP Aset 1.jpg",
      tipe: "VIP Room",
      desc: "Menghadirkan kemewahan untuk memberikan pengalaman eksklusif bagi Anda yang menginginkan kenyamanan dan layanan terbaik. Dengan desain...",
      harga: " 800,000",
      logoFacility: [
        "/assets/icon/bed.svg",
        "/assets/icon/guest.svg",
        "/assets/icon/ukuran.svg",
      ],
      textFacility: ["Twin Bed", "2 Guests", "42㎡ – 45㎡"],
    },
  ];
  return (
    <section className="min-h-screen sm:py-24 flex flex-col sm:p-40">
      <div className="flex flex-col m-auto px-24 items-center  py-7 mt-9 bg-[#F9F9F9] gap-10">
        <div className="space-y-7">
          <h1 className="uppercase font-poppins font-semibold text-center">
            room type
          </h1>
          <div className="border-2 border-gold p-4 flex flex-row gap-6">
            <Image
              src={rooms[slug - 1]?.imageCard}
              width={6000}
              height={4000}
              alt={rooms[slug - 1]?.tipe}
              className="w-40 aspect-[9/6] object-cover"
            />
            <div className="flex flex-col justify-between">
              <h3 className="font-libre_baskerville">
                {rooms[slug - 1]?.tipe}
              </h3>
              <div className="flex flex-row flex-wrap gap-3">
                {rooms[slug - 1]?.logoFacility.map((item, index) => (
                  <div className="flex flex-row items-center gap-2" key={index}>
                    <Image
                      src={item}
                      width={20}
                      height={20}
                      alt={rooms[slug - 1]?.textFacility[index]}
                    />
                    <p className="font-poppins text-sm">
                      {rooms[slug - 1]?.textFacility[index]}
                    </p>
                  </div>
                ))}
              </div>
              <p className="font-poppins font-semibold">
                IDR {rooms[slug - 1]?.harga}{" "}
                <span className="text-xs font-normal">/night</span>
              </p>
            </div>
          </div>
        </div>
        <Form className="flex flex-col gap-y-4">
          <h2 className="font-poppins font-semibold uppercase">
            enter your details
          </h2>
          <div className="grid grid-cols-2 grid-rows-3 gap-x-16 gap-y-4">
            <div className="space-y-1 row-start-1">
              <label
                htmlFor="name"
                className="font-poppins text-sm font-semibold"
              >
                Nama
                <span className="font-poppins font-semibold text-red-500">
                  *
                </span>
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-1 border-b-2 font-poppins text-xs px-0 border-gold bg-transparent outline-none"
                placeholder="Enter Name"
              />
            </div>
            <div className="space-y-1 row-start-2">
              <label
                htmlFor="ktp"
                className="font-poppins text-sm font-semibold"
              >
                Identity Number (KTP)
                <span className="font-poppins font-semibold text-red-500">
                  *
                </span>
              </label>
              <input
                type="number"
                id="ktp"
                className="w-full p-1 border-b-2 font-poppins text-xs px-0 border-gold bg-transparent outline-none"
                placeholder="Enter Identity Number (KTP)"
              />
            </div>
            <div className="space-y-1 row-start-3">
              <label
                htmlFor="no-hp"
                className="font-poppins text-sm font-semibold"
              >
                Phone Number
                <span className="font-poppins font-semibold text-red-500">
                  *
                </span>
              </label>
              <input
                type="number"
                id="no-hp"
                className="w-full p-1 border-b-2 font-poppins text-xs px-0 border-gold bg-transparent outline-none"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="space-y-1 row-start-1">
              <label
                htmlFor="check-in"
                className="font-poppins text-sm font-semibold"
              >
                Check-In Date
                <span className="font-poppins font-semibold text-red-500">
                  *
                </span>
              </label>
              <input
                type="date"
                id="check-in"
                className="w-full p-1 border-b-2 font-poppins text-xs px-0 border-gold bg-transparent outline-none"
                placeholder="Enter Check-Out Date"
              />
            </div>
            <div className="space-y-1 row-start-2">
              <label
                htmlFor="check-out"
                className="font-poppins text-sm font-semibold"
              >
                Check-Out Date
                <span className="font-poppins font-semibold text-red-500">
                  *
                </span>
              </label>
              <input
                type="date"
                id="check-out"
                className="w-full p-1 border-b-2 font-poppins text-xs px-0 border-gold bg-transparent outline-none"
                placeholder="Enter Check-Out Date"
              />
            </div>
            <div className="space-y-1 row-start-3">
              <label
                htmlFor="email"
                className="font-poppins text-sm font-semibold"
              >
                Email
                <span className="font-poppins font-semibold text-red-500">
                  *
                </span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-1 border-b-2 font-poppins text-xs px-0 border-gold bg-transparent outline-none"
                placeholder="Enter Email"
              />
            </div>
          </div>
          <button
            type="submit"
            className="font-poppins hover:bg-transparent hover:border-[1px] hover:border-gold hover:text-gold text-white px-4 py-2 bg-gold uppercase w-fit text-sm mx-auto my-2"
          >
            booking
          </button>
        </Form>
      </div>
    </section>
  );
}