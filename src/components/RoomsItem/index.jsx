export default function RoomsItem({
  hero,
  image1,
  image2,
  image3,
  image4,
  image5,
  tipe,
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <section>
        <div className="bg-gray-300 h-72 w-full">hero</div>
      </section>
      <main className="p-8 pb-20 flex flex-col gap-16 sm:p-32">
        <section className="flex flex-row gap-5">
          <div className="w-1/2 h-[30rem] bg-gray-300">image</div>
          <div className="grid grid-cols-2 gap-5 w-1/2">
            <div className=" bg-gray-300">image</div>
            <div className=" bg-gray-300">Image</div>
            <div className=" bg-gray-300">Image</div>
            <div className=" bg-gray-300">Image</div>
          </div>
        </section>
        <section className="flex flex-row gap-20">
          <div className="space-y-10">
            <h1 className="text-4xl">{tipe}</h1>
            <p className="max-w-screen-xl text-lg">
              Rasakan kenyamanan dan kemewahan di Kamar Deluxe 2 Bed kami.
              Dirancang untuk memberikan pengalaman menginap yang tak
              terlupakan, kamar ini...
            </p>
            <div className="flex flex-row gap-4">
              <p>facility</p>
              <p>facility</p>
              <p>facility</p>
            </div>
          </div>
          <div className="w-full flex flex-row gap-10 justify-center mx-auto">
            <h1 className="text-4xl">Check in</h1>
            <h1 className="text-4xl">Check out</h1>
          </div>
        </section>
        <div className="flex flex-col gap-10 mx-auto">
          <h1 className="text-4xl text-center">Facilities</h1>
          <grid className="grid grid-cols-8 gap-5">
            <p>facility</p>
            <p>facility</p>
            <p>facility</p>
            <p>facility</p>
            <p>facility</p>
            <p>facility</p>
            <p>facility</p>
            <p>facility</p>
          </grid>
        </div>
        {/* <div className="flex flex-col gap-10">
          <h1 className="text-4xl text-center">Gallery</h1>
          <div className="w-full h-96 bg-gray-400"></div>
        </div> */}
        <div className="flex-flex-row">
          <h1 className="text-4xl">More Rooms</h1>
        </div>
      </main>
    </div>
  );
}
