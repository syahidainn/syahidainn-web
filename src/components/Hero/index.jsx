import Image from "next/image";

export default function Hero({ name, desc, img }) {
  return (
    <section>
      <div className="bg-black/30 h-[37rem] w-full absolute flex items-center justify-center">
        <div className="flex gap-3 flex-col justify-center text-white mt-20">
          <h1 className=" m-auto text-center text-4xl font-libre_baskerville">
            {name}
          </h1>
          <p className="text-sm m-auto  text-center max-w-sm">{desc}</p>
        </div>
      </div>
      <Image
        src={img}
        alt={name}
        width={6464}
        height={4320}
        className="object-cover max-h-[37rem] w-full object-center"
      />
    </section>
  );
}
