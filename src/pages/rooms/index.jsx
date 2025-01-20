import Review from "@/components/Review";
import RoomsCard from "@/components/RoomsCard";
import { rooms } from "@/lib/constants";

export default function Rooms() {
  return (
    <div className="flex flex-col min-h-screen font-poppins bg-[#F9F9F9] text-black">
      <div className="bg-gray-300 h-48 md:h-72 w-full">Hero</div>
      <main className="p-4 md:p-8 pb-20 flex flex-col gap-8 md:gap-16 sm:p-8 md:pb-32">
        <div className="flex flex-col gap-6 md:gap-10">
          <h1 className="text-3xl md:text-5xl text-center font-libre_baskerville">
            Our Rooms
          </h1>
          <hr className="bg-black border-0 my-4 h-1 mx-auto w-24 md:w-48" />
          <p className="text-center text-base md:text-lg">
            Nikmati pengalaman menginap yang nyaman, elegan, dan mewah dalam
            setiap pilihan kamar kami dengan fasilitas yang dirancang untuk
            menciptakan suasana menyenangkan dan berkesan.
          </p>
          {rooms.map((room) => (
            <RoomsCard
              key={room.id}
              id={room.id}
              imageCard={room.imageCard}
              tipe={room.tipe}
              desc={room.desc}
              logoFacility={room.logoFacility}
              textFacility={room.textFacility}
            />
          ))}
        </div>
        <div>
          <Review />
        </div>
      </main>
    </div>
  );
}
