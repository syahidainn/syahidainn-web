import { useState } from "react";

export default function MeetingPackageCard({
  title,
  price,
  duration,
  inclusions,
  pricePer,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      {/* Header dengan tombol dropdown */}
      <div
        className="flex justify-between items-center mb-6 cursor-pointer"
        onClick={toggleExpand}
      >
        <h3
          className={`text-2xl font-libre_baskerville ${isExpanded ? "font-semibold" : ""}`}
        >
          {title}
        </h3>
        <div
          className={`w-12 h-12 rounded-full bg-[#AE9578] flex items-center justify-center transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
        >
          <span className="text-white text-xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Konten dengan animasi dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div>
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-3xl font-poppins font-semibold text-[#AE9578]">
              {price}
            </span>
            <span className="text-gray-600">{pricePer}</span>
          </div>
          <div className="mb-6">
            <p className="font-poppins font-semibold">{duration}</p>
          </div>
          <ul className="space-y-3">
            {inclusions.map((inclusion, index) => (
              <li key={index} className="flex items-center font-poppins">
                <svg
                  className="w-4 h-4 mr-2 text-[#AE9578] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {inclusion}
              </li>
            ))}
          </ul>
          <button className="duration-300 delay-100 w-full mt-8 p-3 bg-[#AE9578] text-white font-poppins font-semibold rounded hover:bg-[#9c836a] transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
