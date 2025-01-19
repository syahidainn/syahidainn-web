import RoomsItem from "@/components/RoomsItem";
import { useParams } from "next/navigation";

export default function RoomsPage() {
  const params = useParams();
  const slug = params?.slug;

  const detailRoom = [
    {
      id: 1,
      tipe: "Deluxe Double",
      katakata: "Simply Comfortable, Timeless Comfort",
      imageCard: "Deluxe Double.jpg",
      desc: "Nikmati pengalaman menginap yang menenangkan di Deluxe Double Room, tempat di mana kesederhanaan bertemu dengan keanggunan. Dirancang untuk memberikan kenyamanan yang esensial.",
      logoFacility1: "/assets/icon/bed.svg",
      logoFacility2: "/assets/icon/guest.svg",
      logoFacility3: "/assets/icon/ukuran.svg",
      textFacility1: "Twin Bed",
      textFacility2: "2 Guest",
      textFacility3: "40m² - 45m²",
      price: "IDR 400,000 /night", // Harga untuk Deluxe Double
      facilities: [
        "Free WiFi",
        "Water Heater",
        "Room Service",
        "Free Mineral Water",
        "Dental Kit",
        "Coffee & Tea Maker",
        "Breakfast",
        "AC",
      ], // Facilities for Deluxe Double
      facilityLogos: [
        "/assets/icon/Wifi.svg",
        "/assets/icon/Water Heater.svg",
        "/assets/icon/Room Service.svg",
        "/assets/icon/Free Mineral Water.svg",
        "/assets/icon/Dental Kit.svg",
        "/assets/icon/Coffee.svg",
        "/assets/icon/Breakfast.svg",
        "/assets/icon/AC.svg",
      ], // Logos for Deluxe Double
      galleryImages: [
        "/assets/gallery/deluxe_double_1.jpg",
        "/assets/gallery/deluxe_double_2.jpg",
        "/assets/gallery/deluxe_double_3.jpg",
        "/assets/gallery/deluxe_double_4.jpg",
        "/assets/gallery/deluxe_double_5.jpg",
        "/assets/gallery/deluxe_double_6.jpg",
        "/assets/gallery/deluxe_double_7.jpg",
      ], // Gallery images for Deluxe Double
    },
    {
      id: 2,
      tipe: "Deluxe Triple",
      katakata: "Space for More, Perfect for Sharing",
      imageCard: "Deluxe Triple.jpg",
      desc: "Memberikan pengalaman menginap yang tak terlupakan dengan fasilitas unggulan dengan tiga tempat tidur yang nyaman dan ruang yang luas, kamar ini adalah pilihan sempurna untuk keluarga atau teman.",
      logoFacility1: "/assets/icon/bed.svg",
      logoFacility2: "/assets/icon/guest.svg",
      logoFacility3: "/assets/icon/ukuran.svg",
      textFacility1: "Triple Bed",
      textFacility2: "3 Guest",
      textFacility3: "40m² - 45m²",
      price: "IDR 400,000 /night", // Harga untuk Deluxe Triple
      facilities: [
        "Free WiFi",
        "Water Heater",
        "Room Service",
        "Free Mineral Water",
        "Dental Kit",
        "Coffee",
        "Breakfast",
        "AC",
      ], // Facilities for Deluxe Double
      facilityLogos: [
        "/assets/icon/Wifi.svg",
        "/assets/icon/Water Heater.svg",
        "/assets/icon/Room Service.svg",
        "/assets/icon/Free Mineral Water.svg",
        "/assets/icon/Dental Kit.svg",
        "/assets/icon/Coffee.svg",
        "/assets/icon/Breakfast.svg",
        "/assets/icon/AC.svg",
      ], // Logos for Deluxe Triple
      galleryImages: [
        "/assets/gallery/deluxe_triple_1.jpg",
        "/assets/gallery/deluxe_triple_2.jpg",
        "/assets/gallery/deluxe_triple_3.jpg",
        "/assets/gallery/deluxe_triple_4.jpg",
      ], // Gallery images for Deluxe Triple
    },
    {
      id: 3,
      tipe: "Superior Room",
      katakata: "Affordable Elegance, Unmatched Comfort",
      imageCard: "Superior Double 2.jpg",
      desc: "Pilihan ideal bagi Anda yang menginginkan kenyamanan berkelas dengan harga yang bersaing. Superior Room dirancang dengan gaya modern dan elegan, menghadirkan perpaduan sempurna antara fungsionalitas, dan kemewahan yang menciptakan suasana menginap yang menyegarkan.",
      logoFacility1: "/assets/icon/bed.svg",
      logoFacility2: "/assets/icon/guest.svg",
      logoFacility3: "/assets/icon/ukuran.svg",
      textFacility1: "Twin Bed",
      textFacility2: "2 Guest",
      textFacility3: "42m² - 45m²",
      price: "IDR 500,000 /night", // Harga untuk Superior Room
      facilities: [
        "Free WiFi",
        "Water Heater",
        "Room Service",
        "Free Mineral Water",
        "Dental Kit",
        "Coffee",
        "Breakfast",
        "AC",
        "TV",
        "Kulkas Mini",
      ], // Facilities for Deluxe Double
      facilityLogos: [
        "/assets/icon/Wifi.svg",
        "/assets/icon/Water Heater.svg",
        "/assets/icon/Room Service.svg",
        "/assets/icon/Free Mineral Water.svg",
        "/assets/icon/Dental Kit.svg",
        "/assets/icon/Coffee.svg",
        "/assets/icon/Breakfast.svg",
        "/assets/icon/AC.svg",
        "/assets/icon/TV.svg",
        "/assets/icon/Kulkas Mini.svg",
      ], // Logos for Superior Room
      galleryImages: [
        "/assets/gallery/superior_room_1.jpg",
        "/assets/gallery/superior_room_2.jpg",
        "/assets/gallery/superior_room_3.jpg",
        "/assets/gallery/superior_room_4.jpg",
      ], // Gallery images for Superior Room
    },
    {
      id: 4,
      tipe: "VIP Room",
      katakata: "The Epitome of Elegance, Exclusive Luxury",
      imageCard: "VIP Aset 1.jpg",
      desc: "Menghadirkan kemewahan untuk memberikan pengalaman eksklusif bagi Anda yang menginginkan kenyamanan dan layanan terbaik. Dengan desain yang berkelas dan fasilitas unggulan, VIP Room menciptakan suasana yang tenang dan istimewa, menjadikan setiap momen menginap sebuah kenangan yang tak terlupakan.",
      logoFacility1: "/assets/icon/bed.svg",
      logoFacility2: "/assets/icon/guest.svg",
      logoFacility3: "/assets/icon/ukuran.svg",
      textFacility1: "King Bed",
      textFacility2: "2 Guest",
      textFacility3: "42m² - 45m²",
      price: "IDR 700,000 /night", // Harga untuk VIP Room
      facilities: [
        "Free WiFi",
        "Water Heater",
        "Room Service",
        "Free Mineral Water",
        "Dental Kit",
        "Coffee",
        "Breakfast",
        "AC",
        "TV",
        "Kulkas Mini",
        "Family Room",
        "Bathtub",
      ], // Facilities for Deluxe Double
      facilityLogos: [
        "/assets/icon/Wifi.svg",
        "/assets/icon/Water Heater.svg",
        "/assets/icon/Room Service.svg",
        "/assets/icon/Free Mineral Water.svg",
        "/assets/icon/Dental Kit.svg",
        "/assets/icon/Coffee.svg",
        "/assets/icon/Breakfast.svg",
        "/assets/icon/AC.svg",
        "/assets/icon/TV.svg",
        "/assets/icon/Kulkas Mini.svg",
        "/assets/icon/Family Room.svg",
        "/assets/icon/Bathtub.svg",
      ], // Logos for VIP Room
      galleryImages: [
        "/assets/gallery/vip_room_1.jpg",
        "/assets/gallery/vip_room_2.jpg",
        "/assets/gallery/vip_room_3.jpg",
        "/assets/gallery/vip_room_4.jpg",
      ], // Gallery images for VIP Room
    },
  ];

  // Filter ruangan berdasarkan slug
  const selectedRoom = detailRoom.find((room) => room.id === parseInt(slug));

  return (
    <div className="container mx-auto p-4">
      <div id={slug} className="flex flex-col items-center">
        {/* Menampilkan RoomsItem saja */}
        {selectedRoom && (
          <RoomsItem
            id={selectedRoom.id}
            tipe={selectedRoom.tipe}
            imageCard={selectedRoom.imageCard}
            desc={selectedRoom.desc}
            katakata={selectedRoom.katakata}
            logoFacility1={selectedRoom.logoFacility1}
            logoFacility2={selectedRoom.logoFacility2}
            logoFacility3={selectedRoom.logoFacility3}
            textFacility1={selectedRoom.textFacility1}
            textFacility2={selectedRoom.textFacility2}
            textFacility3={selectedRoom.textFacility3}
            price={selectedRoom.price} // Menambahkan prop price
            facilities={selectedRoom.facilities} // Menambahkan prop facilities
            facilityLogos={selectedRoom.facilityLogos} // Menambahkan prop facilityLogos
            galleryImages={selectedRoom.galleryImages} // Menambahkan prop galleryImages
          />
        )}
      </div>
    </div>
  );
}
