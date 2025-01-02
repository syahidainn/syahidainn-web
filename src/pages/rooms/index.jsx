import Review from "@/components/Review";
import RoomsCard from "@/components/RoomsCard";

export default function Rooms() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-300 h-72 w-full">Hero</div>
      <main className="p-8 pb-20 flex flex-col gap-16 sm:p-32">
        <div className="flex flex-col gap-10">
          <h1 className="text-5xl text-center">Rooms</h1>
          <RoomsCard />
          <RoomsCard classname={"flex-row-reverse justify-between"} />
          <RoomsCard />
          <RoomsCard classname={"flex-row-reverse justify-between"} />
        </div>
        <div>
          <Review />
        </div>
        <div>Gallery</div>
      </main>
    </div>
  );
}
