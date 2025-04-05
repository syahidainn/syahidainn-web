import React from "react";

export default function BookingLayout({ children }) {
  return (
    <section className="min-h-screen sm:py-24 flex flex-col sm:p-40">
      <div className="flex flex-col m-auto px-16 items-center  py-7 mt-9 bg-[#F9F9F9] gap-10">
        {children}
      </div>
    </section>
  );
}
