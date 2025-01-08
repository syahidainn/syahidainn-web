import Image from 'next/image';

export default function RoomsItem({
  imageCard,
  tipe,
  desc,
  logoFacility1,
  logoFacility2,
  logoFacility3,
  textFacility1,
  textFacility2,
  textFacility3,
  price
}) {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 sm:p-32">
      {/* Section untuk gambar kamar */}
      <section className="flex flex-col items-center justify-center h-[30rem] w-full bg-gray-300 mb-10">
        <Image src={`/assets/${imageCard}`} layout="fill" objectFit="cover" />
        <h1 className="text-4xl text-white absolute bottom-12 left-0 right-0 text-center">{tipe}</h1>
      </section>

      {/* Section untuk deskripsi kamar */}
      <section className="flex flex-row gap-24 mt-10"> {/* Mengurangi margin-top */}
        <div className="w-1/2 h-[30rem]">
          <Image src={`/assets/${imageCard}`} width={1000} height={1000} />
        </div>
        <div className="space-y-10">
          <h1 className="text-4xl">{tipe}</h1>
          <p className="max-w-lg text-lg text-justify">{desc}</p>
          <div className="flex flex-row gap-4">
            <Image src={logoFacility1} width={50} height={50} /> 
            <p className="py-2 px-2">{textFacility1}</p>
            <Image src={logoFacility2} width={40} height={40} /> 
            <p className="py-2 px-2">{textFacility2}</p>
            <Image src={logoFacility3} width={30} height={30} /> 
            <p className="py-2 px-2">{textFacility3}</p>
          </div>
          <h2 className="text-2xl font-bold">Harga: {price}</h2> {/* Menampilkan harga */}
        </div>
      </section>

      {/* Section untuk check-in/out */}
      <section className="flex flex-row gap-5 mt-10"> {/* Mengurangi margin-top */}
        <div className="w-full h-[100px] bg-white p-5 shadow-md">
          <div className="flex flex-row gap-5">
            <div className="w-1/2">
              <h1 className="text-lg font-semibold">Check-in</h1>
              <p className="text-lg">2:00 PM</p>
            </div>
            <div className="w-1/2">
              <h1 className="text-lg font-semibold">Check-out</h1>
              <p className="text-lg">12:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section untuk fasilitas tambahan */}
      <section className="flex flex-col gap-10 mx-auto mt-20"> {/* Mengurangi margin-top */}
        <h1 className="text-4xl text-center">Facilities</h1>
        <div className="grid grid-cols-8 gap-5">
          <p>facility</p>
          <p>facility</p>
          <p>facility</p>
          <p>facility</p>
          <p>facility</p>
          <p>facility</p>
          <p>facility</p>
          <p>facility</p>
        </div>
      </section>

{/* Section untuk Gallery Room */}
<section className="flex flex-col gap-10 mx-auto mt-20"></section>
      <h2 className="text-4xl text-center">Gallery Room</h2>
      <section className="flex flex-row gap-7 mt-20"> {/* Mengurangi margin-top */}
        <div className="w-1/2 h-[20rem] bg-gray-300">image</div>
        <div className="grid grid-cols-2 gap-5 w-1/2">
          <div className="bg-gray-300">image</div>
          <div className="bg-gray-300">Image</div>
          <div className="bg-gray-300">Image</div>
          <div className="bg-gray-300">Image</div>
        </div>
      </section>

      {/* Section untuk ruangan lainnya */}
      <section className="flex flex-row mt-10"> {/* Mengurangi margin-top */}
        <h1 className="text-4xl">More Rooms</h1>
      </section>
    </div>
  );
}