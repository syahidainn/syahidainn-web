import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1F1C18] text-white py-8 px-6 md:px-12 font-poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="flex flex-col space-y-2 justify-center">
          <h2 className="text-xl font-semibold">Syahida Inn</h2>
          <p className="text-sm">Hotel In Ciputat</p>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold mb-2">Services</h3>
          <ul className="space-y-1 text-sm ">
            <li>Room</li>
            <li>Meetings & Events</li>
            <li>Restaurant</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">About</h3>
          <p className="text-sm">Our Story</p>
          <h3 className="font-semibold mt-4 mb-2">Follow Us</h3>
          <ul className="space-y-1 text-sm">
            <li>📷 Instagram</li>
            <li>🎵 TikTok</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm">📞 +62-823-117-1400</p>
          <p className="text-sm">✉️ syahida.unitbisnis@apps.uinjkt.ac.id</p>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between text-xs text-gray-400">
        <p>Copyright © 2024. SyahidaInn. All rights reserved.</p>
        <div className="flex space-x-4">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer> 
  );
}
