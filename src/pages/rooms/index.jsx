import Review from "@/components/Review";
import RoomsCard from "@/components/RoomsCard";

export default function Rooms() {
  const lists = [
    {
      id: 1,
      imageCard: "/assets/Deluxe Double.png",
      tipe: "Deluxe Double",
      desc: "Nikmati pengalaman menginap yang menenangkan di Deluxe Double Room, tempat di mana kesederhanaan bertemu dengan keanggunan...",
      logoFacility: "/assets/icon/bed.png",
      textFacility: "Twin Bed"
    },
    {
      id: 2,
      imageCard: "/assets/Deluxe Triple.png",
      tipe: "Deluxe Triple",
      desc: "Memberikan pengalaman menginap yang tak terlupakan dengan fasilitas unggulan dengan tiga tempat tidur yang nyaman dan...",
      logoFacility: "/assets/icon/bed.png"
    },

    {
      id:"3",
      imageCard: "/assets/Superior Double.png",
      tipe: "Superior Double",
      desc:"Pilihan ideal bagi Anda yang menginginkan kenyamanan berkelas dengan harga yang bersaing. Superior Room dirancang dengan gaya modern...",
      logoFacility: "/assets/icon/bed.png"
    },

    {
      id:"4",
      imageCard: "/assets/VIP Room.png",
      tipe: "VIP Room",
      desc:"Menghadirkan kemewahan untuk memberikan pengalaman eksklusif bagi Anda yang menginginkan kenyamanan dan layanan terbaik. Dengan desain...",
      logoFacility: "/assets/icon/bed.png"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-300 h-72 w-full">Hero</div>
      <main className="p-8 pb-20 flex flex-col gap-16 sm:p-32">
        <div className="flex flex-col gap-10">
          <h1 className="text-5xl text-center">Rooms</h1>
          {lists.map((list) => (
            <RoomsCard
              id={list.id}
              imageCard={list.imageCard}
              tipe={list.tipe}
              desc={list.desc}
              logoFacility={list.logoFacility}
              textFacility={list.textFacility}
            />
          ))}
          {
          /* <RoomsCard
            classname={"flex-row-reverse justify-between"}
            imageCard={"/assets/room2.jpg"}
          />
          <RoomsCard />
          <RoomsCard classname={"flex-row-reverse justify-between"} /> */}
        </div>
        <div>
          <Review />
        </div>
        <div>Gallery</div>
      </main>
    </div>
  );
}
