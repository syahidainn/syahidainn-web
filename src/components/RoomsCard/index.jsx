"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RoomsCard({ classname, imageCard, id, tipe, desc, logoFacility, textFacility}) {
  const router = useRouter();

  return (
    <div className={`flex flex-row gap-24 ${classname}`}>
      <div className="w-1/2 h-[30rem]">
        <Image src={imageCard} width={600} height={500} />
      </div>
      <div className="space-y-10">
        <h1 className="text-4xl">{tipe}</h1>
        <p className="max-w-lg text-lg">{desc}</p>
        <div className="flex flex-row gap-4">
          <Image src={logoFacility} width={50} height={50}/> <p className="  py-2 px-2">{textFacility}</p>
          <Image src={logoFacility} width={50} height={50}/> <p className=" py-2">{textFacility}</p>
          <Image src={logoFacility} width={50} height={50}/> <p className=" py-2">{textFacility}</p>
        </div>
      </div>
      <div>
      <button className= "mx-auto p-4 font-semibold border-[#AE9578] border-2 w-fit text-[#AE9578]" onClick={() => router.push(`/rooms/${id}`)}>click</button>
      </div>
    </div>
  );
}
