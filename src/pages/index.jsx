import RoomsCardHome from "@/components/RoomsCardHome";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className={` flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]`}
    >
      <section>
        <div className="bg-black/20 h-[35rem] w-full absolute flex items-center justify-center">
          <div className="flex gap-3 flex-col justify-center text-white mt-20">
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
          className="object-cover max-h-[35rem] w-full object-center"
        />
      </section>
      <section className="p-32 flex flex-col gap-16">
        <div className="flex flex-row gap-20">
          <div className="flex flex-col gap-5">
            {/* <Image src="/assets/LineBorder.png" width={100} height={100} /> */}
            <h1 className="text-3xl font-libre_baskerville">Syahida Inn</h1>
            <p className="max-w-lg text-sm">
              Welcome to Syahida Inn – Redefining Hospitality Since 2003
            </p>
            <p className="max-w-lg text-sm">
              Syahida Inn telah melayani wisatawan eksklusif sejak tahun 1946
              dengan menjadi tempat pertemuan para kepala negara, lokasi pidato
              yang mengubah dunia, serta ilham kisah romansa paling terkenal
              sepanjang masa. Setiap masa inap membawa Anda ke ragam pengalaman
              menggugah jiwa, selaras dengan semangat eksplorasi, penemuan
              budaya, serta pesona duniawi yang ditemukan di setiap perjalanan.
            </p>
          </div>
          <div className="w-[1px] bg-black h-[28rem]"></div>
        </div>
      </section>
      <section>
        <div className="h-96 bg-gray-400">video</div>
      </section>
      <section className="p-8 pb-20 flex flex-col gap-16 sm:p-32">
        <h1 className="text-4xl text-center mx-auto">Rooms</h1>
        <hr />
        {/* <div className="flex flex-row justify-between">
          <RoomsCardHome />
          <RoomsCardHome />
          <RoomsCardHome />
          <RoomsCardHome />
        </div> */}
        <button className="mx-auto p-4 font-semibold border-[#AE9578] border-2 w-fit text-[#AE9578]">
          Book Now
        </button>
      </section>
      <section className="p-8 pb-20 flex flex-row gap-16 sm:p-32 sm:pt-0 mx-auto">
        <h1 className="text-4xl text-center mx-auto">Facilities</h1>
        <hr />
      </section>
      <section className="p-8 pb-20 flex flex-row gap-16 sm:p-32">
        <div className="w-1/2 bg-gray-400 h-[28rem]"></div>
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl">Meetings & Event</h1>
          <p className="text-lg max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At beatae
            eveniet ducimus consequatur accusantium quae, doloremque neque
            sapiente, corrupti illum blanditiis, aliquam provident culpa
            deleniti?
          </p>
          <button className="p-4 font-semibold border-[#AE9578] border-2 w-fit text-[#AE9578]">
            Learn More
          </button>
        </div>
      </section>
      <section className="p-8 pb-20 flex flex-row gap-16 sm:p-32 sm:pt-0 mx-auto">
        <h1 className="text-4xl text-center mx-auto">Facilities</h1>
        <hr />
      </section>
      <section className="p-8 pb-20 flex flex-row gap-16 sm:p-32">
        {/* <div className="bg-gray-400 w-1/2 h-[28rem]">Location</div>
        <h1 className="text-5xl">Location</h1> */}
      </section>
    </div>
  );
}
