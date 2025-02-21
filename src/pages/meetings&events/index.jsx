import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function MeetingEvents() {
  return (
    <div
      className="flex flex-col min-h-screen"
    >
      <Hero
        name="Meetings & Events"
        desc="The Perfect Venue for Every Occasion"
        img="/assets/hero_meetingevent2.jpg"
      />

       {/*ballroom section*/}
      <section>
        <Container>
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-fit">
              <h1 className="text-3xl text-center font-libre_baskerville">
                Ballroom
              </h1>
              <hr className="w-1/2 mx-auto border-black my-2" />
            </div>
            <p className="sm font-poppins text-center max-w-xl mt-4">
              Ballroom kami dirancang dengan sentuhan elegan dan modern, 
              menyediakan ruang yang luas dan nyaman untuk menyelenggarakan 
              berbagai acara yang berkesan.
            </p>

            {/*tampilan lobby*/}
            <div className="grid grid-cols-3 gap-10 mt-10">
              <div className="flex flex-col gap-4">
                <div className="w-full aspect-[4/3]">
                  <Image
                    src={"/assets/VIP Aset 1.jpg"}
                    width={4626}
                    height={3468}
                    className="w-full h-full object-cover object-center-bottom"
                  />
                </div>
                <h3 className="text-xl font-libre_baskerville text-center">
                  Lobby
                </h3>
              </div>

              {/*tampilan Serbaguna*/}
              <div className="flex flex-col gap-4">
                <div className="w-full aspect-[4/3]">
                  <Image
                    src={"/assets/Serbaguna.jpg"}
                    width={4626}
                    height={3468}
                    className="w-full h-full object-cover object-center-bottom"
                  />
                </div>
                <h3 className="text-xl font-libre_baskerville text-center">
                  Serbaguna
                </h3>
              </div>

              {/*tampilan Auditorium*/}
              <div className="flex flex-col gap-4">
                <div className="w-full aspect-[4/3]">
                  <Image
                    src={"/assets/Auditorium.jpg"}
                    width={4626}
                    height={3468}
                    className="w-full h-full object-cover object-center-bottom"
                  />
                </div>
                <h3 className="text-xl font-libre_baskerville text-center">
                  Auditorium
                </h3>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/*meeting room section*/}
      <section>
        <Container className="sm:pt-2">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-fit">
              <h1 className="text-3xl text-center font-libre_baskerville">
                Meeting Rooms
              </h1>
              <hr className="w-1/2 mx-auto border-black my-2" />
            </div>
            <p className="sm font-poppins text-center max-w-xl mt-4">
              Ruang meeting kami dirancang untuk menciptakan lingkungan 
              yang sempurna bagi pertemuan bisnis. Dilengkapi dengan berbagai 
              fasilitas, ruang ini siap mendukung setiap kegiatan anda.
            </p>

            {/*tampilan Madya*/}
            <div className="flex flex-row gap-10 mt-10 items-center">
              <div className="flex flex-col gap-4">
                <div className="w-full aspect-[4/3]">
                  <Image
                    src={"/assets/Madya.jpg"}
                    width={4626}
                    height={3468}
                    className="w-[373.6px] h-full object-cover object-center-bottom"
                  />
                </div>
                <h3 className="text-xl font-libre_baskerville text-center">
                  Ruang Madya
                </h3>
              </div>

              {/*tampilan ruang kelas*/}
              <div className="flex flex-col gap-4">
                <div className="w-full aspect-[4/3]">
                  <Image
                    src={"/assets/Ruang Kelas.jpg"}
                    width={4626}
                    height={3468}
                    className="w-[373.6px] h-full object-cover object-center-bottom"
                  />
                </div>
                <h3 className="text-xl font-libre_baskerville text-center">
                  Ruang Kelas
                </h3>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/*events section*/}
      <section>
        <Container className="sm:pt-2">
          <div className="flex flex-col items-center gap-14">
            <div className="flex flex-col w-full">
              <h1 className="text-3xl text-center font-libre_baskerville">
                The Events
              </h1>
              <hr className="border-gold/60 mt-4 mb-1" />
              <hr className="border-gold/60" />
            </div>
            <div className="flex flex-row mt-4">
              <div className="w-28 h-28 bg-[#D1BFA9]"></div>
              <Image
                src="/assets/Weddings.jpg"
                alt="Wedding Image"
                width={4626}
                height={3468}
                className="top-4 -left-24 relative w-[49%] aspect-[3/2]"
              />

              {/*tampilan weddings*/}
              <div className="flex flex-col gap-4 place-content-center">
                <h2 className="text-4xl font-libre_caslon_text uppercase">
                  Weddings
                </h2>
                <p className="text-sm font-poppins text-wrap max-w-md">
                  Rayakan moment sakral Anda di Syahida Inn, 
                  tempat di mana pernikahan impian Anda menjadi kenyataan. 
                  Dengan layanan terbaik, kami siap membantu merancang hari 
                  istimewa Anda untuk menciptakan pengalaman yang tak terlupakan. 
                </p>
              </div>
            </div>

            {/*tampilan meetings*/}
            <div className="flex flex-row-reverse justify-between my-8">
              <Image
                src="/assets/Meetings.jpg"
                alt="Wedding Image"
                width={4626}
                height={3468}
                className=" w-[49%] aspect-[3/2]"
              />
              <div className="flex flex-col gap-4 place-content-center">
                <h2 className="text-4xl font-libre_caslon_text uppercase">
                  Meetings
                </h2>
                <p className="text-sm font-poppins text-wrap max-w-md">
                 Untuk acara bisnis, seminar, dan koferesnsi, 
                 Syahida Inn adalah tempat yang tepat untuk 
                 menyelenggarakan kegiatan Anda. Dilengkapi dengan 
                 fasilitas dan layanan terbaik, kami siap mendukung 
                 setiap kebutuhan acara Anda.
                </p>
              </div>
            </div>

            {/*tampilan events*/}
            <div className="flex flex-row relative -top-4">
              <div className="w-28 h-28 bg-[#E0C09B]"></div>
              <Image
                src="/assets/Events.jpg"
                alt="Wedding Image"
                width={4626}
                height={3468}
                className="top-4 -left-24 relative w-[49%] aspect-[3/2]"
              />
              <div className="flex flex-col gap-4 place-content-center">
                <h2 className="text-4xl font-libre_caslon_text uppercase">
                  Events
                </h2>
                <p className="text-sm font-poppins text-wrap max-w-md">
                   Rayakan momen istimewa Anda di hotel kami, di mana 
                   setiap acara menjadi pengalaman tak terlupakan. 
                   Dengan ruang acara yang elegan dan luas. Mengakomodasi 
                   berbagai perayaan, dari pernikahan hingga acara perusahaan.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
