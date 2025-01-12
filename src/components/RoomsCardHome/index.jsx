import Image from "next/image";

export default function RoomsCardHome({ name, img }) {
  return (
    <div className="flex flex-col gap-4 w-[23%]">
      <div className="bg-gray-400  aspect-[4/3]">
        <Image
          src={img}
          width={4626}
          height={3468}
          className="w-full h-full object-cover object-center-bottom"
        />
      </div>
      <h3 className="text-xl font-libre_baskerville">{name}</h3>
      <p className="text-sm text-justify font-poppins font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ab non
        eligendi, ipsa repudiandae animi.
      </p>
    </div>
  );
}
