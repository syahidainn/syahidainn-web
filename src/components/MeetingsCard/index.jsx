export default function MeetingsCard({ classname }) {
  return (
    <div className={`flex flex-row gap-24 ${classname}`}>
      <div className="w-1/2 h-[30rem] bg-gray-300">image</div>
      <div className="space-y-10">
        <h1 className="text-4xl">Serbaguna & Lobby</h1>
        <p className="max-w-lg text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dicta
          accusamus suscipit incidunt facilis vel quo impedit deserunt
          reiciendis pariatur.
        </p>
        <p className="fonr-semibold text-2xl">
          IDR 14.500.000<span className="text-lg">/6 Hours</span>
        </p>
        <hr />
        <div>
          <h2 className="font-semibold text-lg">facilities</h2>
          <div className="flex flex-row gap-4 text-lg">
            <p>facility</p>
            <p>facility</p>
            <p>facility</p>
          </div>
        </div>
        <button className="p-4 bg-primary text-white font-semibold">
          Book Now
        </button>
      </div>
    </div>
  );
}
