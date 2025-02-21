export default function MeetingsCard({ classname, title, imgSrc }) {
  let price;
  switch (title) {
    case "Ruang Madya I":
      price = "IDR 2.500.000";
      break;
    case "Ruang Madya II":
      price = "IDR 1.700.000";
      break;
    case "Ruang Madya III":
      price = "IDR 1.700.000";
      break;
    case "Ruang Kelas":
      price = "IDR 2.500.000";
      break;
  }

  return (
    <div className={`flex flex-row gap-24 ${classname}`}>
      <div className="w-1/2 h-[30rem] bg-gray-300">
        <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="space-y-6">
        <h1 className="text-4xl font-libre_baskerville">{title}</h1>
        <hr className="bg-black h-1" style={{ width: `${title.length * 21}px` }} />
        <div className="mt-6">
          {title === "Ruang Madya I" ? (
            <div className="flex flex-row gap-10 mt-10">
              <p className="max-w-lg text-lg font-poppins">
                <img src="/assets/icon/clock.svg" alt="icon" className="inline-block mr-2 w-6" />
                8 Hours of Use
              </p>
              <p className="max-w-lg text-lg font-poppins">
                <img src="/assets/icon/max person.svg" alt="icon" className="inline-block mr-2 w-8" />
                Max 50 Person
              </p>
            </div>
          ) : title === "Ruang Madya II" ? (
            <div className="flex flex-row gap-10 mt-10">
              <p className="max-w-lg text-lg font-poppins">
                <img src="/assets/icon/clock.svg" alt="icon" className="inline-block mr-2 w-6" />
                8 Hours of Use
              </p>
              <p className="max-w-lg text-lg font-poppins">
                <img src="/assets/icon/max person.svg" alt="icon" className="inline-block mr-2 w-8" />
                Max 50 Person
              </p>
            </div>
          ) : title === "Ruang Madya III" ? (
            <div className="flex flex-row gap-10 mt-10">
              <p className="max-w-lg text-lg font-poppins">
                <img src="/assets/icon/clock.svg" alt="icon" className="inline-block mr-2 w-6" />
                8 Hours of Use
              </p>
              <p className="max-w-lg text-lg font-poppins">
                <img src="/assets/icon/max person.svg" alt="icon" className="inline-block mr-2 w-8" />
                Max 50 Person
              </p>
            </div>
          ) : title === "Ruang Kelas" ? (
            <div className="flex flex-row gap-10 mt-10">
              <p className="max-w-lg text-lg font-poppins">
                <img src="/assets/icon/clock.svg" alt="icon" className="inline-block mr-2 w-6" />
                8 Hours of Use
              </p>
              <p className="max-w-lg text-lg font-poppins">
                <img src="/assets/icon/max person.svg" alt="icon" className="inline-block mr-2 w-8" />
                Max 50 Person
              </p>          
              </div>
          ) : null}
        </div>
        <div className="mt-10">
          <h2 className="font-semibold text-lg font-poppins mb-2 mt-10">Facilities</h2>
          <div className="flex flex-row gap-4 text-1xl font-poppins mt-5">
            <ul className="list-disc list-inside space-y-2 mr-10">
              <li className="marker:text-2xl font-poppins">AC</li>
              <li className="marker:text-2xl font-poppins">WiFi</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li className="marker:text-2xl font-poppins">Proyektor</li>
              <li className="marker:text-2xl font-poppins">Sound System</li>
            </ul>
          </div>
        </div>
        <div>
          <p className="font-semibold text-2xl mt-11">
            <span className="text-2xl font-poppins font-semibold">{price}</span>
          </p>
        </div>
        <div>
        <button className="p-4 bg-white text-[#AE9578] font-semibold mt-5 border-[#AE9578] border-2">
          Book Now
        </button>
        </div>
      </div>
    </div>
  );
}
