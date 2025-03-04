import Image from "next/image";

export default function Hero({ name, desc, img }) {
  return (
    <div>
      <div className="bg-black/30 h-[20rem] md:h-[37rem] w-full absolute flex items-center justify-center">
        <div className="flex gap-3 flex-col justify-center text-white mt-20">
          <h1 className="m-auto text-center text-2xl md:text-4xl font-libre_baskerville">
            {name}
          </h1>
          <p className="text-xs md:text-sm m-auto text-center max-w-xs md:max-w-sm">
            {desc}
          </p>
        </div>
      </div>
      <Image
        src={img}
        alt={name}
        width={6464}
        height={4320}
        className="object-cover max-h-[20rem] md:max-h-[37rem] w-full object-[0%_70%]"
      />
    </div>
  );
}
