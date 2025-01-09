"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RoomsCard({ classname, imageCard, id, tipe, desc, logoFacility, logoFacility1, logoFacility2, textFacility, textFacility1, textFacility2}) {
  const router = useRouter();

  return (
    <div className={`flex flex-row gap-24 ${classname}`}>
      <div className="w-1/2 h-[30rem]">
        <Image src={imageCard} width={600} height={500} />
      </div>
      <div className="space-y-12">
        <h1 className="text-4xl">{tipe}</h1>
        <p className="max-w-lg text-lg">{desc}</p>
        <div className="flex flex-nowrap gap-4">
          <Image src={logoFacility} width={60} height={60} /> <p className="">{textFacility}</p>
          <Image src={logoFacility1} width={50} height={42} /> <p className="">{textFacility1}</p>
          <Image src={logoFacility2} width={50} height={50} /> <p className="">{textFacility2}</p>
        </div>
      </div>
      <div className="flex flex-col place-content-center pt-36 space-y-28" >
      <button className= "mx-auto p-4 font-semibold border-[#AE9578] border-2 w-fit text-[#AE9578]" onClick={() => router.push(`/rooms/${id}`)}>click</button>
      </div>
    </div>
  );
}
