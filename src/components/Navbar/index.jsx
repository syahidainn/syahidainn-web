export default function Navbar() {
  return (
    <div className={`flex flex-col items-center gap-5`}>
      <div className="flex flex-row xl:gap-8 justify-between w-full lg:justify-center gap-5 items-center text-xs font-light tracking-wide font-libre_caslon_text">
        {/* mobile menu */}
        <div className="lg:hidden">
          <i className="bx bx-menu text-black text-4xl"></i>
        </div>
        <p className="hidden lg:block">Home</p>
        <p className="hidden lg:block">Rooms</p>
        <p className="hidden lg:block">Meetings & Events</p>
        <div className="flex flex-col max-w-[20%] mx-3">
          <h1 className="text-xl italic font-semibold text-yellow-500 text-center tracking-widest font-libre_caslon_text">
            Syahida Inn
          </h1>
          <p className="text-[10px] text-center italic font-libre_caslon_text text-gray-800">
            Wisma & Resort
          </p>
        </div>
        <p className="hidden lg:block">Dinning</p>
        <p className="hidden lg:block">Gallery</p>
        <button className="uppercase border-black border-[1px] bg-primary text-white leading-loose p-2 px-3 text-xs font-normal">
          Book Now
        </button>
      </div>
    </div>
    // {/* mobile menu */}
    // <div className="sm:hidden">
    //   <i className="bx bx-menu text-white text-4xl"></i>
    // </div>
  );
}
