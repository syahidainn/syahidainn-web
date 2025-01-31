import MeetingsCard from "@/components/MeetingsCard";
import MeetingPackageCard from "@/components/MeetingPackageCard";

export default function Meetings() {
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

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-300 h-72 w-full flex items-center justify-center">
        <h1 className="text-5xl font-medium">MEETING</h1>
      </div>
      <section className="flex items-center justify-center">
        <div className="mt-12 mb-12 w-full bg-[#F8F4EE] p-10">
          <h1 className="text-4xl text-center font-libre_baskerville">MEETINGS</h1>
          <hr className="bg-[#1E1E1E] h-0.5 mx-auto w-24"/>
        </div>
      </section>
      <div className="px-56">
        <p className="text-center text-lg font-poppins mb-36">
          All rooms and villas are a thoughtful harmony of natural colour palettes, beautiful ocean or garden views, traditional design and contemporary technologies.
        </p>
      </div>
      <main className="px-8 sm:px-32 space-y-40">
        <MeetingsCard title="Ruang Madya I" imgSrc="/assets/Ruang Madya 1.JPG" />
        <MeetingsCard title="Ruang Madya II" classname="flex-row-reverse justify-between" imgSrc="/assets/Ruang Madya 2.JPG" />
        <MeetingsCard title="Ruang Madya III" imgSrc="/assets/Ruang Madya 3.JPG" />
        <MeetingsCard title="Ruang Kelas" classname="flex-row-reverse justify-between" />
        <section className="mb-40">
          <h1 className="text-4xl text-center font-libre_baskerville mb-16">Meeting Package</h1>
          <div className="flex flex-col space-y-8">
            {packages.map((pkg, index) => (
              <MeetingPackageCard
                key={index}
                title={pkg.title}
                price={pkg.price}
                pricePer={pkg.pricePer}
                duration={pkg.duration}
                inclusions={pkg.inclusions}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
