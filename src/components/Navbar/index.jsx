export default function Navbar() {
  return (
    <div className="flex flex-row xl:gap-8 justify-between w-full lg:justify-center gap-5 items-center text-xs font-light tracking-wide font-libre_caslon_text">
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
      <div className="flex flex-row xl:gap-8 gap-5 justify-between text-center mx-auto">
        <p className="hidden lg:block">Home</p>
        <p className="hidden lg:block">Rooms</p>
        <p className="hidden lg:block">Meetings & Events</p>
        <p className="hidden lg:block">Dinning</p>
        <p className="hidden lg:block">Gallery</p>
      </div>
      <button className="uppercase border-black border-[1px] bg-primary text-white leading-loose p-2 px-3 lg:ml-auto ml-0 text-xs font-normal">
        Book Now
      </button>
    </div>
    // {/* mobile menu */}
    // <div className="sm:hidden">
    //   <i className="bx bx-menu text-white text-4xl"></i>
    // </div>
  );
}
