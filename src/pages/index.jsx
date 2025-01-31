import RoomsCardHome from "@/components/RoomsCardHome";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const sectionRef = useRef();

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const facilities_home = [
    {
      name: "Free Parking",
      icon: "/assets/icon/parking.svg",
    },
    {
      name: "Restaurant",
      icon: "/assets/icon/restaurant.svg",
    },
    {
      name: "Free Wifi",
      icon: "/assets/icon/Wifi.svg",
    },
    {
      name: "Room Service",
      icon: "/assets/icon/service.svg",
    },
    {
      name: "Musholla ",
      icon: "/assets/icon/musholla.svg",
    },
    {
      name: "Playground",
      icon: "/assets/icon/playground.svg",
    },
    {
      name: "Laundry",
      icon: "/assets/icon/laundry.svg",
    },
  ];

  const rooms_home = [
    {
      name: "Delux Double",
      img: "/assets/Superior Double 2.jpg",
    },
    {
      name: "Delux Triple",
      img: "/assets/SUPERIOR Aset 1.jpg",
    },
    {
      name: "Superior Room",
      img: "/assets/Superior Double 2.jpg",
    },
    {
      name: "VIP Room",
      img: "/assets/VIP Aset 1.jpg",
    },
  ];

  return (
    <div
      className={` flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]`}
    >
      <section className="max-h-screen">
        <div className="bg-black/30 h-screen w-full absolute flex items-center justify-center">
          <div className="flex gap-3 flex-col justify-center text-white relative top-[5vh] bottom-0">
            <h1 className=" m-auto text-center text-4xl font-libre_baskerville">
              The Best Hotel in Ciputat
            </h1>
            <p className="text-sm m-auto  text-center max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              minima ipsum maxime omnis id amet rerum quam adipisci veniam
              beatae?
            </p>
          </div>
        </div>
        <Image
          src="/assets/syahidainn.jpg"
          alt="gedung syahidainn"
          width={6464}
          height={4320}
          className="object-cover h-screen w-full object-center"
        />
        <button
          onClick={() => scrollToSection()}
          className="flex left-0 right-0 mx-auto relative bottom-[10vh] "
        >
          {" "}
          <i className="w-fit bx bx-chevron-down text-5xl text-white animate-bounce hover:bg-black/50 hover:rounded-full hover:delay-100" />
        </button>
      </section>
      <section
        className="sm:p-40 sm:py-28 flex flex-col gap-16 items-center"
        ref={sectionRef}
      >
        <div className="flex flex-row gap-20">
          <Image
            src="/assets/LineBorder.svg"
            width={100}
            height={100}
            className="absolute"
          />
          <div className="flex flex-col gap-5 m-7">
            {/* <h1 className="text-3xl font-libre_baskerville">Syahida Inn</h1> */}
            <p className="max-w-md text-lg font-libre_baskerville leading-relaxed text-[#695441]">
              Welcome to Syahida Inn – <br />
              Redefining Hospitality Since 2003
            </p>
            <p className="max-w-lg text-sm font-poppins leading-relaxed font-light">
              Syahida Inn telah melayani wisatawan eksklusif sejak tahun 1946
              dengan menjadi tempat pertemuan para kepala negara, lokasi pidato
              yang mengubah dunia, serta ilham kisah romansa paling terkenal
              sepanjang masa. Setiap masa inap membawa Anda ke ragam pengalaman
              menggugah jiwa, selaras dengan semangat eksplorasi, penemuan
              budaya, serta pesona duniawi yang ditemukan di setiap perjalanan.
            </p>
          </div>
          <div className="w-[1px] bg-black h-[15rem] my-auto"></div>
          <div className="flex flex-col gap-y-6">
            <h1 className="text-4xl font-libre_baskerville mt-6">
              Syahida Inn
            </h1>
            <div className="flex flex-col gap-y-2">
              <div className="items-center flex flex-row gap-x-2">
                <i className="bx bxl-whatsapp text-4xl text-[#695441]" />
                <p className="text-sm text-[#695441] font-poppins">
                  +62-823-117-1400
                </p>
              </div>
              <div className="items-center flex flex-row gap-x-2">
                <i className="bx bxs-envelope text-4xl text-[#695441]" />
                <p className="text-sm font-poppins text-[#695441]">
                  syahida.unitbisnis@apps.uinjkt.ac.id
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="h-[35rem] flex bg-gray-400 m-auto">
          <p className="text-white text-lg m-auto">video</p>
        </div>
      </section>
      <section className="sm:py-24 flex flex-col gap-16 sm:p-40  mx-auto">
        <h1 className="text-secondary px-3 mx-auto text-3xl text-center w-fit font-libre_baskerville">
          Facilities
        </h1>
        <div className="flex flex-row flex-wrap justify-center max-w-xl gap-20">
          {facilities_home.map((facility) => (
            <div className="flex flex-col gap-4 " key={facility.name}>
              <Image
                src={facility.icon}
                width={50}
                height={50}
                className="max-w-10 max-h-10 mx-auto"
              />
              <p className="text-sm font-poppins text-center text-secondary">
                {facility.name}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="sm:py-24 flex flex-col gap-16 sm:p-40 bg-[#F8F4EE]">
        <div className="flex flex-row items-center mx-auto">
          <div className="w-32 h-[1px] bg-black"></div>
          <h1 className=" px-3 text-3xl text-center w-fit font-libre_baskerville">
            Rooms
          </h1>
          <div className="w-32 h-[1px] bg-black"></div>
        </div>
        <div className="flex gap-y-5 flex-row justify-between flex-wrap">
          {rooms_home.map((room) => (
            <RoomsCardHome key={room.name} name={room.name} img={room.img} />
          ))}
        </div>
        <button className="hover:bg-secondary hover:text-white mx-auto text-sm p-4 py-3 border-secondary border-2 w-fit text-secondary font-poppins uppercase">
          Explore Rooms
        </button>
      </section>
      <section className="sm:py-24 flex flex-col gap-16 sm:p-40">
        <div className="flex flex-row items-center mx-auto">
          <div className="w-32 h-[1px] bg-black"></div>
          <h1 className=" px-3 text-3xl text-center w-fit font-libre_baskerville">
            Meetings & Events
          </h1>
          <div className="w-32 h-[1px] bg-black"></div>
        </div>
        <div className="flex flex-row">
          <div className="w-[40rem] bg-gray-400 h-[30rem]">
            <Image
              src="/assets/Meetings.jpg"
              alt="Meetings image"
              width={4626}
              height={3468}
              className=" object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-10 bg-[#221111]/80 justify-evenly w-[28rem] relative my-auto p-10 right-24 text-white">
            <h2 className="text-3xl text-center font-libre_baskerville">
              Meetings
            </h2>
            <p className="text-sm font-poppins font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At beatae
              eveniet ducimus consequatur accusantium quae, doloremque neque
              sapiente, corrupti illum blanditiis, aliquam provident culpa
              deleniti?
            </p>
            <button className="hover:bg-white hover:text-[#221111] p-4 py-3 text-sm uppercase font-poppins border-white border-2 w-fit text-white">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="w-[40rem] h-[30rem]">
            <Image
              src="/assets/BG Meetings & Events.jpg"
              alt="Events image"
              width={4626}
              height={3468}
              className=" object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-10 bg-[linear-gradient(90deg,_rgba(58,49,38,0.85)_0%,_rgba(160,135,105,0.85)_100%)] justify-evenly w-[28rem] relative my-auto p-10 left-24 text-white">
            <h2 className="text-3xl text-center font-libre_baskerville">
              Events
            </h2>
            <p className="text-sm font-poppins font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At beatae
              eveniet ducimus consequatur accusantium quae, doloremque neque
              sapiente, corrupti illum blanditiis, aliquam provident culpa
              deleniti?
            </p>
            <button className="p-4 py-3 text-sm uppercase font-poppins border-white border-2 w-fit text-white hover:text-[#221111] hover:bg-white">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-16 sm:pt-20">
        <div className="flex flex-row items-center mx-auto sm:px-32">
          <div className="w-32 h-[1px] bg-black"></div>
          <h1 className=" px-3 text-3xl text-center w-fit font-libre_baskerville">
            Restaurant
          </h1>
          <div className="w-32 h-[1px] bg-black"></div>
        </div>
        <div className="w-full h-[37rem]">
          <Image
            src="/assets/Resto 2.jpeg"
            width={3232}
            height={2160}
            className="w-full object-cover h-[37rem] object-bottom"
          />
          <div className="flex flex-col gap-10 bg-[#221111]/80  w-[28rem] relative bottom-80  ml-auto mr-32 p-10 text-white">
            <h2 className="text-3xl text-center font-libre_baskerville">
              Restaurant
            </h2>
            <p className="text-sm font-poppins font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At beatae
              eveniet ducimus consequatur accusantium quae, doloremque neque
              sapiente, corrupti illum blanditiis, aliquam provident culpa
              deleniti?
            </p>
          </div>
        </div>
      </section>
      <section className="sm:py-24 flex flex-col gap-16 sm:p-40">
        <div className="flex flex-row items-center mx-auto">
          <div className="w-32 h-[1px] bg-black"></div>
          <h1 className=" px-3 text-3xl text-center w-fit font-libre_baskerville">
            Gallery
          </h1>
          <div className="w-32 h-[1px] bg-black"></div>
        </div>
        <div className="grid grid-rows-2 gap-2">
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-gray-300 col-span-1">
              <Image
                src={"/assets/Gallery Home 1.jpg"}
                alt="Gallery Image"
                width={2608}
                height={4624}
                className="h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-2 col-span-2">
              <div className="bg-gray-300 col-span-1 h-full">
                <Image
                  src={"/assets/Events.jpg"}
                  alt="Gallery Image"
                  width={6000}
                  height={4000}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="bg-gray-300 col-span-1 h-full">
                <Image
                  src={"/assets/Playground.jpg"}
                  alt="Gallery Image"
                  width={1616}
                  height={1080}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="bg-gray-300 col-span-2 h-full row-span-1">
                <Image
                  src={"/assets/Gallery Home 4.png"}
                  alt="Gallery Image"
                  width={2008}
                  height={964}
                  className="object-cover aspect-video w-full"
                />
              </div>
            </div>
            <div className="bg-gray-300 col-span-1">
              <Image
                src={"/assets/Gallery Home 2.jpg"}
                alt="Gallery Image"
                width={4624}
                height={3468}
                className="object-cover h-full w-fit"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className=" bg-gray-300"></div>
            <div className=" bg-gray-300"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
