import RoomsCard from "../RoomsCard";

export default function Rooms() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-5xl text-center">Best Seller Rooms</h1>
      <RoomsCard />
      <RoomsCard classname={"flex-row-reverse"} />
      <RoomsCard />
      <RoomsCard classname={"flex-row-reverse"} />
    </div>
  );
}
