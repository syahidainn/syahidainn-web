import Image from "next/image";

export default function Footer() {
  return (
    <footer className= "bg-[#1F1C18] text-white py-8 font-poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6 md:px-12">
        <div className="flex flex-col space-y-2 justify-center">
          <h2 className="text-xl font-semibold font-libre_baskerville">Syahida Inn</h2>
          <p className="text-sm">Hotel In Ciputat</p>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold mb-2">Services</h3>
          <ul className="space-y-4 text-sm">
            <li>Room</li>
            <li>Meetings & Events</li>
            <li>Restaurant</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">About</h3>
          <p className="text-sm mb-10">Our Story</p>
          <h3 className="font-semibold mt-4 mb-3">Follow Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center">
              <Image src={"/assets/icon/instagram.png"} width={30} height={30} alt="Instagram" />
              <span className="ml-2">Instagram</span>
            </li>
            <li className="flex items-center">
              <Image src={"/assets/icon/TikTok.png"} width={30} height={30} alt="TikTok" />
              <span className="ml-2">TikTok</span>
            </li>
          </ul>
        </div>
        <div className="space-y-5">
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="flex items-center text-sm">
            <Image src={"/assets/icon/whatsapp.png"} width={30} height={30} alt="WhatsApp" />
            <span className="ml-2">+62-823-117-1400</span>
          </p>
          <p className="flex items-center text-sm">
            <Image src={"/assets/icon/email.png"} width={30} height={30} alt="Email" />
            <span className="ml-2">syahida.unitbisnis@apps.uinjkt.ac.id</span>
          </p>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between text-xs text-gray-400 px-6 md:px-12">
        <p>Copyright © 2024. SyahidaInn. All rights reserved.</p>
        <div className="flex space-x-4">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer> 
  );
}