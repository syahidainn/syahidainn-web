"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RoomsCard({
  classname,
  imageCard,
  id,
  tipe,
  desc,
  logoFacility,
  textFacility,
}) {
  const router = useRouter();

  return (
    <div className={`flex flex-col md:flex-row  gap-8 md:gap-24 ${classname}`}>
      <div className="w-[600px] object-cover aspect-[9/6]">
        <Image
          src={imageCard}
          width={600}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-4 md:space-y-10 my-auto">
        <h1 className="text-3xl font-libre_baskerville">{tipe}</h1>
        <p className="max-w-full md:max-w-lg text-base font-light font-poppins">
          {desc}
        </p>
        <div className="flex flex-wrap gap-4">
          {logoFacility.map((item, index) => (
            <div className="flex items-center gap-2" key={index}>
              <Image
                src={item}
                width={50}
                height={50}
                className="w-8 h-8 md:w-10 md:h-10"
              />
              <p className="text-sm md:text-base">{textFacility[index]}</p>
            </div>
          ))}
        </div>
        <div className="inline-flex gap-6 items-center">
          <button className="duration-300 delay-100 hover:bg-white hover:text-[#AE9578] mx-auto text-sm p-4 py-3 font-poppins font-semibold border-[#AE9578] border-2 text-white bg-[#AE9578]">
            Book Now
          </button>
          <button
            className="duration-300 delay-100 mx-auto text-sm py-1 hover:text-[#AE9578] hover:border-[#AE9578] font-poppins font-semibold h-fit border-black border-b-2 text-black"
            onClick={() => router.push(`/rooms/${id}`)}
          >
            Explore Rooms
          </button>
        </div>
      </div>
    </div>
  );
}
