"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RoomsCard({ classname, imageCard, id, tipe }) {
  const router = useRouter();

  return (
    <div className={`flex flex-row gap-24 ${classname}`}>
      <div className="w-1/2 h-[30rem] bg-gray-300">
        <Image src={imageCard} width={500} height={500} />
      </div>
      <div className="space-y-10">
        <h1 className="text-4xl">{tipe}</h1>
        <p className="max-w-lg text-lg">
          Rasakan kenyamanan dan kemewahan di Kamar Deluxe 2 Bed kami. Dirancang
          untuk memberikan pengalaman menginap yang tak terlupakan, kamar ini...
        </p>
        <div className="flex flex-row gap-4">
          <p>facility</p>
          <p>facility</p>
          <p>facility</p>
        </div>
      </div>
      <button onClick={() => router.push(`/rooms/${id}`)}>click</button>
    </div>
  );
}
