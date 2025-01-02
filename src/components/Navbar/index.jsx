export default function Navbar() {
  return (
    <div className={`flex flex-row justify-between items-center`}>
      <div className="flex flex-col text-white max-w-[20%]">
        <h1 className="text-xl sm:text-4xl">Syahida Inn</h1>
        <p className="text-xs sm:text-base">Wisma & Resort</p>
      </div>
      <div className="sm:flex sm:flex-row hidden">
        <div className="flex flex-row xl:gap-10 gap-5 text-white text-xl items-center mx-auto">
          <p>Home</p>
          <p>Rooms</p>
          <p>Meetings & Events</p>
          <p>Dinning</p>
          <p>Gallery</p>
        </div>
      </div>
      <button className="border-white border-2 px-3 py-2 text-white text-xl">
        Book Now
      </button>
      {/* mobile menu */}
      <div className="sm:hidden">
        <i className="bx bx-menu text-white text-4xl"></i>
      </div>
    </div>
  );
}
