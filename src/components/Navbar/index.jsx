import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-row xl:gap-8 justify-between w-full lg:justify-center gap-5 items-center text-sm font-light tracking-wide font-libre_caslon_text">
      {/* mobile menu */}
      <div className="lg:hidden">
        <i className="bx bx-menu text-black text-4xl"></i>
      </div>
      <div
        className="flex flex-col text-wrap
       ml-auto lg:ml-0 justify-center w-[90%] lg:w-fit lg:mr-0 relative items-center lg:left-0"
      >
        <h1 className="text-2xl font-semibold text-primary text-center tracking-widest font-libre_caslon_text">
          Syahida Inn
        </h1>
        <p className="text-[10px] text-center italic font-libre_caslon_text text-gray-800">
          hotel in ciputat
        </p>
      </div>
      <div className="flex flex-row xl:gap-8 gap-5 justify-between font-normal text-center mx-auto">
        <Link
          href={"/"}
          className={`hidden lg:block hover:border-b-[1px] hover:border-black  py-2 ${
            pathname === "/" ? "border-b-[1px] border-black " : ""
          }`}
        >
          Home
        </Link>
        <Link
          href={"/rooms"}
          className={`hidden lg:block hover:border-b-[1px] hover:border-black py-2 ${
            pathname?.startsWith("/rooms") ? "border-b-[1px] border-black" : ""
          }`}
        >
          Rooms
        </Link>
        <Link
          href={"/meetings&events"}
          className={`hidden lg:block hover:border-b-[1px] hover:border-black   py-2 ${
            pathname === "/meetings&events" ? "border-b-[1px] border-black" : ""
          }`}
        >
          Meetings & Events
        </Link>
        <Link
          href={"/dinning"}
          className={`hidden lg:block hover:border-b-[1px] hover:border-black   py-2 ${
            pathname === "/dinning" ? "border-b-[1px] border-black" : ""
          }`}
        >
          Dinning
        </Link>
        <Link
          href={"/gallery"}
          className={`hidden lg:block hover:border-b-[1px] hover:border-black   py-2 ${
            pathname === "/gallery" ? "border-b-[1px] border-black" : ""
          }`}
        >
          Gallery
        </Link>
      </div>
      <button className="duration-300 delay-100 uppercase bg-primary text-white leading-loose p-2 px-3 lg:ml-auto ml-0 text-xs font-normal">
        Book Now
      </button>
    </div>
    // {/* mobile menu */}
    // <div className="sm:hidden">
    //   <i className="bx bx-menu text-white text-4xl"></i>
    // </div>
  );
}
