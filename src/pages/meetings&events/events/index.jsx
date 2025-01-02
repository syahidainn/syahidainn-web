import EventsCard from "@/components/EventsCard";

export default function Events() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-300 h-72 w-full">Hero</div>
      <main className="p-8 pb-20 flex flex-col gap-28 sm:p-32">
        <EventsCard />
        <EventsCard classname={"flex-row-reverse justify-between"} />
        <EventsCard />
        <EventsCard classname={"flex-row-reverse justify-between"} />
      </main>
    </div>
  );
}
