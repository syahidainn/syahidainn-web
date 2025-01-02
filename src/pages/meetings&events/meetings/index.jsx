import MeetingsCard from "@/components/MeetingsCard";

export default function Meetings() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-300 h-72 w-full">Hero</div>
      <main className="p-8 pb-20 flex flex-col gap-28 sm:p-32">
        <MeetingsCard />
        <MeetingsCard classname={"flex-row-reverse justify-between"} />
        <MeetingsCard />
        <MeetingsCard classname={"flex-row-reverse justify-between"} />
        <h1 className="text-5xl">Meeting Package</h1>
      </main>
    </div>
  );
}
