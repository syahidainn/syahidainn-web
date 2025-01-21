import Review from "@/components/Review";
import RoomsCard from "@/components/RoomsCard";
import { rooms } from "@/lib/constants";

export default function Rooms() {
  return (

    //tampilan halaman rooms
    <div className="flex flex-col min-h-screen font-poppins bg-[#F9F9F9] text-black">
      <div className="bg-gray-300 h-48 md:h-72 w-full">Hero</div>
      <main className="p-4 md:p-8 pb-20 flex flex-col gap-8 md:gap-16 sm:p-8 md:pb-32">
        <div className="flex flex-col gap-6 md:gap-10">

          {/*menampilkan deskripsi*/}
         <h1 className="text-3xl mb-10 mt-12 md:text-5xl text-center font-libre_baskerville bg-[#F8F4EE] pt-10">
          Our Rooms
            <hr className="bg-[#1E1E1E] my-4 h-0.5 mx-auto w-24 md:w-48"/>
          </h1>
          <p className="text-center p-5 mb-24 text-base md:text-lg font-poppins px-4 md:px-60 lg:px-80 xl:px-96">
            Nikmati pengalaman menginap yang nyaman, elegan, dan mewah dalam
            setiap pilihan kamar kami dengan fasilitas yang dirancang untuk
            menciptakan suasana menyenangkan dan berkesan.
          </p>

          {/*menampilkan data*/}
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

        {/*menampilkan review*/}
        <div>
          <Review />
        </div>
      </main>
    </div>
  );
}
