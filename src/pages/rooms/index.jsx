import Review from "@/components/Review";
import RoomsCard from "@/components/RoomsCard";

export default function Rooms() {
  const lists = [
    {
      id: 1,
      imageCard: "/assets/room1.jpg",
      tipe: "Delux",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 2,
      imageCard: "/assets/room2.jpg",
      tipe: "VIP",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
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
            />
          ))}
          {/* <RoomsCard
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
