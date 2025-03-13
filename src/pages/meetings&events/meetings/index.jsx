import { useState } from 'react';
import MeetingsCard from "@/components/MeetingsCard";
import MeetingPackageCard from "@/components/MeetingPackageCard";
import Image from "next/image";

export default function Meetings() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const packages = [
    {
      title: "Halfday Meeting",
      price: "IDR 250,000",
      pricePer: "/Pax/Person",
      duration: "Room 4 hours usage",
      inclusions: [
        "1x Coffee Break",
        "1x Lunch/Dinner",
      ]
    },
    {
      title: "Fullday Meeting",
      price: "IDR 450,000",
      pricePer: "/Pax/Person",
      duration: "Room 8 hours usage",
      inclusions: [
        "2x Coffee Break",
        "1x Lunch/Dinner",
      ]
    },
    {
      title: "Allday Meeting",
      price: "IDR 650,000",
      pricePer: "/Pax/Person",
      duration: "Room 12 hours usage",
      inclusions: [
        "2x Coffee Break",
        "1x Lunch & Dinner",
      ]
    },
    {
      title: "Fullboard Meeting",
      price: "IDR 850,000",
      pricePer: "/Pax/Person",
      duration: "24 hours package",
      inclusions: [
        "2x Coffee Break",
        "1x Lunch & Dinner",
      ]
    }
  ];

  const handleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-300 w-full flex items-center justify-center bg-cover bg-center h-[35rem]" style={{ backgroundImage: "url('/assets/BG.jpg')" }}>
        <h1 className="text-5xl font-medium text-white font-libre_baskerville">Meetings</h1>
      </div>
      <section className="flex items-center justify-center">
        <div className="mt-12 mb-12 w-full bg-[#F8F4EE] p-10">
          <h1 className="text-3xl text-center font-libre_baskerville font">MEETINGS</h1>
          <hr className="bg-[#1E1E1E] h-0.5 mx-auto w-24"/>
        </div>
      </section>
      <div className="px-56">
        <p className="text-center text-lg font-poppins font-light mb-36">
        Ruang meeting kami dirancang untuk menciptakan lingkungan yang sempurna bagi pertemuan bisnis. Dilengkapi dengan berbagai fasilitas, ruang ini siap mendukung setiap kegiatan anda.
        </p>
      </div>
      <main className="px-8 sm:px-32 space-y-40">
        <MeetingsCard title="Ruang Madya I" imgSrc="/assets/Madya 1.jpg" />
        <MeetingsCard title="Ruang Madya II" classname="flex-row-reverse justify-between" imgSrc="/assets/Madya 2.jpg" />
        <MeetingsCard title="Ruang Madya III" imgSrc="/assets/Madya 3.jpg" />
        <MeetingsCard title="Ruang Kelas" classname="flex-row-reverse justify-between" imgSrc="/assets/Kelas.jpg" />
        <section className="mb-40">
          <h1 className="text-4xl text-center font-libre_baskerville mb-16">Meeting Package</h1>
          <div className="flex flex-col space-y-8 mb-24">
            {packages.map((pkg, index) => (
              <MeetingPackageCard
                key={index}
                title={pkg.title}
                price={pkg.price}
                pricePer={pkg.pricePer}
                duration={pkg.duration}
                inclusions={pkg.inclusions}
                isExpanded={expandedIndex === index}
                onExpand={() => handleExpand(index)}
              />
            ))}
          </div>
        </section>
      </main>
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
