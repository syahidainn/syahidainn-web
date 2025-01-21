import EventsCard from "@/components/EventsCard";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Events() {

  {/*data yang akan ditampilkan*/}
  const events = [
    {
      id: 1,
      imageCard: "/assets/Auditorium.jpg",
      eventType: "Lobby",
      desc: "Lobby kami adalah ruang yang elegan dan nyaman, sempurna untuk acara kecil seperti pertemuan, networking atau acara lainnya. Dengan fasilitas yang lengkap, kami siap mendukung setiap kebutuhan acara Anda..",
      price: "7.000.000",
      facilities: [
        { name: "AC" },
        { name: "Kursi Futura" },
        { name: "Sound System" },
        { name: "Sound System" },
        { name: "LCD Proyektor" },
        { name: "Wifi" }
      ]
    },
    {
      id: 2,
      imageCard: "/assets/Serbaguna.jpg",
      eventType: "Serbaguna & Lobby",
      desc: "Pilihan sempurna untuk berbagai acara, mulai dari pertemuan bisnis, pelatihan, hingga perayaan istimewa. Dengan kapasitas yang dapat disesuaikan, ruang ini dapat diatur sesuai kebutuhan Anda.",
      price: "14.500.000",
      facilities: [
        { name: "AC" },
        { name: "Kursi Futura" },
        { name: "Sound System" },
        { name: "Sound System" },
        { name: "LCD Proyektor" },
        { name: "Wifi" },
        { name: "Make Up Room" },
      ]
    },
    {
      id: 3,
      imageCard: "/assets/Auditorium.jpg",
      eventType: "Auditorium",
      desc: "Auditorium kami menawarkan ruang untuk pernikahan, wisuda, dan seminar. Dilengkapi dengan fasilitas terbaik dan kapasitas yang luas.",
      price: "12.000.000",
      facilities: [
        { name: "AC" },
        { name: "Kursi Futura" },
        { name: "Sound System" },
        { name: "Sound System" },
        { name: "LCD Proyektor" },
        { name: "Wifi" },
        {name: "Make Up Room"}
      ]
    }
  ];

  return (
    //tampilan halaman events
    <div className="flex flex-col min-h-screen">
      
        {/*menampilkan hero*/}
        <Hero
          name="Events"
          img={"/assets/BG Events.jpg"}
        />
        
        {/*menampilkan deskripsi*/}
        <div className="flex flex-col gap-8 md:gap-10">
          <h1 className="text-3xl mb-10 mt-12 md:text-5xl text-center font-libre_baskerville bg-[#F8F4EE] pt-10">Events
            <hr className="bg-[#1E1E1E] my-4 h-0.5 mx-auto w-24 md:w-48"/>
          </h1>
          <p className="text-center mb-7 text-base md:text-lg font-poppins px-4 md:px-60 lg:px-80 xl:px-96">
            All rooms and villas are a thoughtful harmony of 
            natural colour palettes, beautiful ocean or garden views, traditional design and contemporary 
            technologies.
          </p>
        <main className="p-4 md:p-8 pb-20 flex flex-col gap-10 md:gap-16 sm:p-8 md:pb-32">
          <div className="flex flex-col gap-28">

            {/*menampilkan data*/}
            {events.map((event) => (
              <EventsCard 
                key={event.id}
                classname={event.id === 2 ? "md:flex-row-reverse" : ""}
                specialStyle={event.id === 1}
                specialStyle2={event.id === 2}
                backgroundColor={event.id === 3 ? "bg-[#F8F4EE]" : ""}
                imageCard={event.imageCard}
                eventType={event.eventType}
                desc={event.desc}
                price={event.price}
                facilities={event.facilities}
              />
            ))}
          </div>
        </main>
        </div>

        {/*menampilkan alamat dan nomor telepon*/}
       <section className="flex flex-col sm:flex-row gap-5 mb-10 w-full bg-[#F8F4EE] p-5 h-auto sm:h-[200px]">
        <div className="w-full h-full p-5 pl-5 sm:pl-20">
          <h1 className="text-lg font-bold mb-5">Address</h1>
          <div className="flex items-center">
            <Image src="/assets/icon/lokasi.svg" width={24} height={24} className="mr-2" />
            <p className="text-base font-poppins">
              Jl. Kertamukti No.5, Cireundeu, Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15412
            </p>
          </div>
        </div>
        <div className="w-full h-full p-5 pl-5 sm:pl-20">
          <h2 className="text-lg font-bold mb-5">Call to reserve</h2>
          <div className="flex items-center">
            <Image src="/assets/icon/Phone.svg" width={24} height={24} className="mr-2" />
            <p className="text-base font-poppins">+62-823-117-1400</p>
          </div>
        </div>
        </section>
    </div>
  );
}
