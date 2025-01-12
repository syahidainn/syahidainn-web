import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function MeetingEvents() {
  return (
    <div
      className="flex flex-col min-h-screen
  "
    >
      <Hero
        name="Meetings & Events"
        desc="The Perfect Venue for Every Occasion"
        img="/assets/hero_meetingevent2.jpg"
      />
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              veniam iste expedita laudantium beatae est laboriosam dicta!
            </p>
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
                  Serbaguna
                </h3>
              </div>
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
                  Auditorium
                </h3>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="sm:pt-0">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-fit">
              <h1 className="text-3xl text-center font-libre_baskerville">
                Meeting Rooms
              </h1>
              <hr className="w-1/2 mx-auto border-black my-2" />
            </div>
            <p className="sm font-poppins text-center max-w-xl mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              veniam iste expedita laudantium beatae est laboriosam dicta!
            </p>
            <div className="flex flex-row gap-10 mt-10 items-center">
              <div className="flex flex-col gap-4">
                <div className="w-full aspect-[4/3]">
                  <Image
                    src={"/assets/VIP Aset 1.jpg"}
                    width={4626}
                    height={3468}
                    className="w-[373.6px] h-full object-cover object-center-bottom"
                  />
                </div>
                <h3 className="text-xl font-libre_baskerville text-center">
                  Ruang Madya
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-full aspect-[4/3]">
                  <Image
                    src={"/assets/VIP Aset 1.jpg"}
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

      <section>
        <Container>
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
                src="/assets/hero_meetingevent2.jpg"
                alt="Wedding Image"
                width={4626}
                height={3468}
                className="top-4 -left-24 relative w-[49%] aspect-[3/2]"
              />
              <div className="flex flex-col gap-4 place-content-center">
                <h2 className="text-4xl font-libre_caslon_text uppercase">
                  Weddings
                </h2>
                <p className="text-sm font-poppins text-wrap max-w-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  tenetur laborum atque? Assumenda qui ratione blanditiis
                  quisquam, eligendi nihil optio?
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse justify-between my-8">
              <Image
                src="/assets/hero_meetingevent2.jpg"
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  tenetur laborum atque? Assumenda qui ratione blanditiis
                  quisquam, eligendi nihil optio?
                </p>
              </div>
            </div>
            <div className="flex flex-row relative -top-4">
              <div className="w-28 h-28 bg-[#E0C09B]"></div>
              <Image
                src="/assets/hero_meetingevent2.jpg"
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  tenetur laborum atque? Assumenda qui ratione blanditiis
                  quisquam, eligendi nihil optio?
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
