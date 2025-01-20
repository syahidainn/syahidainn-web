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
    <div className={`flex flex-col md:flex-row gap-8 md:gap-24 ${classname}`}>
      <div className="w-full md:w-1/2 h-[20rem] md:h-[30rem]">
        <Image
          src={imageCard}
          width={600}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-6 md:space-y-12">
        <h1 className="text-2xl md:text-4xl">{tipe}</h1>
        <p className="max-w-full md:max-w-lg text-base md:text-lg">{desc}</p>
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
        <div className="flex flex-col md:flex-row gap-4">
          <button className="p-2 md:p-4 font-semibold border-[#AE9578] border-2 text-white bg-[#AE9578]">
            click
          </button>
          <button
            className="p-2 md:p-4 font-bold border-black border-2 text-black"
            onClick={() => router.push(`/rooms/${id}`)}
          >
            Explore Rooms
          </button>
        </div>
      </div>
    </div>
  );
}
