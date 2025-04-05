"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { formatNumber, rooms } from "@/lib/constants";
import { useRouter } from "next/router";
import { submitForm } from "@/lib/firebase/service";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CldUploadButton } from "next-cloudinary";
import { sendBookingForm } from "@/lib/api";
import { useFormStatus } from "react-dom";

export default function BookingPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [KTP, setKTP] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const [submit, setSubmit] = useState(false);
  const [jumlah, setJumlah] = useState(1);

  const increaseButton = () => {
    setJumlah((prev) => prev + 1);
  };

  const decreaseButton = () => {
    setJumlah((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const hanndleButton = () => {
    if (submit) {
      // Reset form state
      setName("");
      setEmail("");
      setKTP("");
      setPhone("");
      setCheckIn("");
      setCheckOut("");
      setImageUrl("");
    }
    setSubmit(!submit);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!KTP) newErrors.KTP = "Identity Number (KTP) is required";
    if (!phone) newErrors.phone = "Phone Number is required";
    if (!checkIn) newErrors.checkIn = "Check-in Date is required";
    if (!checkOut) newErrors.checkOut = "Check-out Date is required";
    if (!imageUrl) newErrors.imageUrl = "Proof of Payment is required";

    // Jika ada error, set state dan hentikan submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      await submitForm("booking", {
        name,
        email,
        KTP,
        phone,
        checkIn,
        checkOut,
        imageUrl,
      });
      await sendBookingForm({
        name,
        email,
        KTP,
        phone,
        checkIn,
        checkOut,
        imageUrl,
      });
      alert("Form submitted successfully!");
    } catch (error) {
      alert("Error submitting form");
    }
  };

  const handleImageUpload = (result) => {
    setImageUrl(result.info.secure_url);
    setFileName(`${result.info.original_filename}.${result.info.format}`);
  };

  const calculateLengthOfStay = (checkIn, checkOut) => {
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);
    const diffTime = Math.abs(endDate - startDate);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Selisih dalam hari
  };

  const lengthOfStay = calculateLengthOfStay(checkIn, checkOut) || 1;

  const { pending } = useFormStatus();

  return (
    <section className="min-h-screen sm:py-24 flex flex-col items-center sm:p-40">
      <div className="flex flex-col px-10  py-7 mt-9 gap-10 min-w-fit">
        <div className={`flex flex-row gap-10 justify-between`}>
          <div className="space-y-4 w-1/2">
            <h1 className="uppercase font-poppins font-semibold text-center">
              Your Order
            </h1>
            <div className="border-2 border-gold p-4 flex flex-col justify-between gap-5">
              <Image
                src={rooms[slug - 1]?.imageCard}
                width={6000}
                height={4000}
                alt={rooms[slug - 1]?.tipe}
                className="w-full aspect-[9/6] object-cover"
              />
              <div className="flex flex-col justify-between gap-2">
                <h3 className="font-libre_baskerville text-lg">
                  {rooms[slug - 1]?.tipe}
                </h3>
                <div className="flex flex-row gap-3">
                  {rooms[slug - 1]?.logoFacility.map((item, index) => (
                    <div
                      className="flex flex-row items-center gap-1"
                      key={index}
                    >
                      <Image
                        src={item}
                        width={19}
                        height={19}
                        alt={rooms[slug - 1]?.textFacility[index]}
                      />
                      <p className="font-poppins text-sm min-w-fit">
                        {rooms[slug - 1]?.textFacility[index]}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="font-poppins font-semibold my-2">
                  IDR {formatNumber(rooms[slug - 1]?.harga)}{" "}
                  <span className="text-xs font-normal">/night</span>
                </p>
                <div className="flex flex-row justify-between">
                  <p className="text-base font-poppins font-semibold">
                    Total Stay: {lengthOfStay} Nights
                  </p>
                  <div className="flex flex-col justify-between">
                    <p className="text-base font-poppins font-semibold">
                      Total Price
                    </p>
                    <p className="text-base font-poppins">
                      IDR{" "}
                      {formatNumber(
                        rooms[slug - 1]?.harga * jumlah * lengthOfStay
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form className="flex flex-col  gap-4 w-1/2" onSubmit={handleSubmit}>
            <h2 className="font-poppins font-semibold uppercase">
              enter your details
            </h2>
            <div className="flex flex-col justify-between gap-x-16 gap-y-4">
              <div className="space-y-1 row-start-1">
                <label
                  htmlFor="name"
                  className="font-poppins text-sm font-semibold"
                >
                  Name
                  <span className="font-poppins font-semibold text-red-500">
                    *
                  </span>
                </label>
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name}</p>
                )}
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  defaultValue={name}
                  onChange={(e) => setName(e.target.value)}
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
                {errors.KTP && (
                  <p className="text-red-500 text-xs">{errors.KTP}</p>
                )}
                <input
                  type="number"
                  id="ktp"
                  name="ktp"
                  value={KTP}
                  defaultValue={KTP}
                  onChange={(e) => setKTP(e.target.value)}
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
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone}</p>
                )}
                <input
                  type="number"
                  id="no-hp"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-1 border-b-2 font-poppins text-xs px-0 border-gold bg-transparent outline-none"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1">
                    <label
                      className="text-sm font-poppins font-semibold"
                      htmlFor="jumlah"
                    >
                      Jumlah Kamar
                    </label>
                    <div className="flex flex-row">
                      <button
                        type="button"
                        onClick={decreaseButton}
                        className="duration-300 delay-100 bg-gold w-5 h-5 text-white aspect-square flex items-center  self-end justify-center"
                      >
                        -
                      </button>

                      <input
                        type="number"
                        value={jumlah}
                        className="text-center h-fit items-center w-full mx-4 border-b-2 self-center border-gold bg-transparent outline-none"
                      />
                      <button
                        type="button"
                        onClick={increaseButton}
                        className="duration-300 delay-100 bg-gold w-5 h-5 text-white aspect-square flex items-center  self-end justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="justify-between flex flex-col self-end gap-1">
                    <label
                      htmlFor="check-in"
                      className="font-poppins text-sm font-semibold"
                    >
                      Check-In Date
                      <span className="font-poppins font-semibold text-red-500">
                        *
                      </span>
                    </label>
                    {errors.checkin && (
                      <p className="text-red-500 text-xs">{errors.checkin}</p>
                    )}
                    <input
                      type="date"
                      id="check-in"
                      name="checkin"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full p-1 border-b-2 font-poppins text-xs px-0 border-gold bg-transparent outline-none"
                      placeholder="Enter Check-Out Date"
                    />
                  </div>
                  <div className="justify-between flex flex-col self-end gap-1">
                    <label
                      htmlFor="check-out"
                      className="font-poppins text-sm font-semibold"
                    >
                      Check-Out Date
                      <span className="font-poppins font-semibold text-red-500">
                        *
                      </span>
                    </label>
                    {errors.checkout && (
                      <p className="text-red-500 text-xs">{errors.checkout}</p>
                    )}
                    <input
                      type="date"
                      id="check-out"
                      name="checkout"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full p-1 border-b-2 font-poppins text-xs px-0 border-gold bg-transparent outline-none"
                      placeholder="Enter Check-Out Date"
                    />
                  </div>
                </div>
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
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-1 border-b-2 font-poppins text-xs px-0 border-gold bg-transparent outline-none"
                  placeholder="Enter Email"
                />
              </div>
              <div className="">
                <p className="font-poppins text-sm font-semibold">
                  Payment{" "}
                  <span className="text-xs font-normal text-gray-500">
                    (DP 50% maksimal sebelum check in)
                  </span>
                </p>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Rekening Bank</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-row justify-between">
                        <p className="font-poppins text-base">
                          BNI: 1122334455
                        </p>
                        <div className="flex flex-col space-y-1 ">
                          <label
                            id="buktiTf"
                            className="font-poppins text-sm font-semibold w-fit"
                          >
                            Upload Bukti Transfer
                            <span className="font-poppins font-semibold text-red-500">
                              *
                            </span>
                          </label>
                          <CldUploadButton
                            uploadPreset="bukti-tf"
                            onSuccess={handleImageUpload}
                            className="font-poppins text-sm bg-gold text-white p-2 w-full"
                          />
                          {fileName && <p>{fileName}</p>}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>QRIS</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <button
              type="submit"
              className="duration-300 delay-100 font-poppins hover:bg-transparent hover:border-[1px] hover:border-gold hover:text-gold text-white px-4 py-2 bg-gold uppercase w-fit text-sm mx-auto my-2"
              onClick={hanndleButton}
              disabled={pending}
            >
              {pending ? "loading..." : "booking"}
            </button>
            <button
              type="button"
              onClick={async () => {
                await fetch("/api/emails", { method: "POST" });
              }}
            >
              send email
            </button>
          </form>
        </div>
        {/* <div className={`${submit ? "block" : "hidden"} space-y-5`}>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <h1 className="font-libre_baskerville text-xl uppercase">
                syahida inn
              </h1>{" "}
              <p className=" text-xs text-center font-light font-libre_baskerville">
                hotel in ciputat
              </p>{" "}
            </div>
            <h1 className="font-poppins flex text-xl uppercase items-center">
              invoice 000-11
            </h1>
          </div>
          <hr className="border-[1px] border-gold" />
          <h1 className="text-poppins text-3xl text-center underline">
            {name}
          </h1>
          <div className="border-gold p-10 font-poppins border-[1px]">
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-1 text-sm">
                <p className=" text-gray-500">Check-In</p>
                <p className="text-black">Date</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p className=" text-gray-500">Total Length of Stay</p>
                <p className="text-black">1 Night</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p className=" text-gray-500">Type Room</p>
                <p className="text-black">{name}</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p className=" text-gray-500">Email</p>
                <p className="text-black">{email}</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p className=" text-gray-500">Check-Out</p>
                <p className="text-black">Date</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p className=" text-gray-500">Total Room</p>
                <p className="text-black">1</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p className=" text-gray-500">Phone</p>
                <p className="text-black">{phone}</p>
              </div>
            </div>
          </div>
          <p className="font-semibold font-poppins uppercase">
            your price summary
          </p>
          <div className="flex flex-col gap-3">
            <div className="text-sm font-poppins font-semibold flex flex-row justify-between">
              <p className="text-gray-500">Rooms</p>
              <p className="text-black">IDR {rooms[slug - 1]?.harga}</p>
            </div>
            <div className="text-sm font-poppins font-semibold flex flex-row justify-between">
              <p className="text-gray-500">Extras</p>
              <p className="text-black">0</p>
            </div>
            <div className="flex flex-row text-gold font-poppins font-semibold text-lg uppercase justify-between">
              <p className="">total price</p>
              <p className="">IDR {rooms[slug - 1]?.harga}</p>
            </div>
          </div>
          <button onClick={hanndleButton}>download invoice</button>
        </div> */}
      </div>
      <button
        onClick={() => router.push(`/rooms/${slug}`)}
        className={`duration-300 delay-100 font-poppins text-sm flex w-fit items-center my-4`}
      >
        <i className="bx bx-left-arrow-alt text-gold text-2xl items-center" />
        Back to room
      </button>
    </section>
  );
}
