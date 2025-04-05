import Image from "next/image";

export default function EventsCard({
  classname,
  imageCard,
  eventType,
  desc,
  price,
  facilities,
  specialStyle,
  specialStyle2,
  backgroundColor,
}) {
  return (
    //tampilan rectangle color pada id:1
    <div
      className={`relative flex flex-col pt-10 w-full md:flex-row gap-6 md:gap-12 ${classname} ${backgroundColor}`}
    >
      {/*tampilan gambar*/}
      <div className="relative pl-5 w-full md:w-1/2 h-[15rem] md:h-[30rem]">
        <Image
          src={imageCard}
          width={600}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/*tampilan deskripsi*/}
      <div className="space-y-3 my-4 md:space-y-9">
        <h1 className="text-2xl md:text-4xl font-libre_baskerville mb-3">
          {eventType}
        </h1>
        <p className="max-w-full md:max-w-lg text-base md:text-lg font-poppins">
          {desc}
        </p>
        <p className="text-lg md:text-xl font-semibold font-poppins">
          IDR {price} / 6 Hours
        </p>
        <hr
          className="bg-[#1E1E1E] my-2 h-0.5 mx-auto"
          style={{ width: "100%", maxWidth: "480px" }}
        />
        <p className="font-poppins font-semibold mb-1">Facilities: </p>
        <ul className="list-disc pl-5 grid grid-cols-2 gap-x-2 gap-y-1 text-xl font-poppins">
          {facilities.map((facility, index) => (
            <li key={index} className="text-sm md:text-base">
              {facility.name}
            </li>
          ))}
        </ul>
        <button className="duration-300 delay-100 p-2 md:p-3 font-semibold border-[#AE9578] border-2 text-[#AE9578] bg-transparent font-poppins">
          Book Now
        </button>
      </div>
    </div>
  );
}
