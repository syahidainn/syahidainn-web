import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Review from "@/components/Review";
import RoomsCard from "@/components/RoomsCard";
import { rooms } from "@/lib/constants";
import Image from "next/image";

export default function Rooms() {
  return (
    //tampilan halaman rooms
    <div className="flex flex-col min-h-screen font-poppins bg-[#F9F9F9] text-black">
      <Hero name="Our Rooms" img="/assets/Superior Double 2.jpg" />
      {/* <div className="p-4 md:p-8 pb-20 flex flex-col gap-8 md:gap-16 sm:p-8 md:pb-32"> */}

      {/*menampilkan deskripsi*/}
      <section>
        <Container className="space-y-4">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-fit">
              <h1 className="text-3xl text-center font-libre_baskerville">
                Our Rooms
              </h1>
              <hr className="w-1/2 mx-auto border-black my-2" />
            </div>
            {/* <p className="sm font-poppins text-center max-w-xl mt-4">
              Nikmati pengalaman menginap yang nyaman, elegan, dan mewah dalam
              setiap pilihan kamar kami dengan fasilitas yang dirancang untuk
              menciptakan suasana menyenangkan dan berkesan.
            </p> */}
          </div>
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
        </Container>
      </section>

      {/*menampilkan review*/}
      <Review />
    </div>
    // </div>
  );
}
