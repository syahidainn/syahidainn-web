export const rooms = [
  {
    id: 1,
    imageCard: "/assets/Double.jpg",
    tipe: "Deluxe Double",
    desc: "Nikmati pengalaman menginap yang menenangkan di Deluxe Double Room, tempat di mana kesederhanaan bertemu dengan keanggunan...",
    harga: 400000,
    logoFacility: [
      "/assets/icon/bed.svg",
      "/assets/icon/guest.svg",
      "/assets/icon/ukuran.svg",
    ],
    textFacility: ["Twin Bed", "2 Guests", "42㎡ – 45㎡"],
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
    imageCard: "/assets/Deluxe Triple.jpg",
    tipe: "Deluxe Triple",
    desc: "Memberikan pengalaman menginap yang tak terlupakan dengan fasilitas unggulan dengan tiga tempat tidur yang nyaman dan...",
    harga: 500000,
    logoFacility: [
      "/assets/icon/bed.svg",
      "/assets/icon/guest.svg",
      "/assets/icon/ukuran.svg",
    ],
    textFacility: ["Three Bed", "3 Guests", "42㎡ – 45㎡"],
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
    imageCard: "/assets/SUPERIOR Aset 1.jpg",
    tipe: "Superior Double",
    desc: "Pilihan ideal bagi Anda yang menginginkan kenyamanan berkelas dengan harga yang bersaing. Superior Room dirancang dengan gaya modern...",
    harga: 600000,
    logoFacility: [
      "/assets/icon/bed.svg",
      "/assets/icon/guest.svg",
      "/assets/icon/ukuran.svg",
    ],
    textFacility: ["Twin Bed", "2 Guests", "42㎡ – 45㎡"],
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
    imageCard: "/assets/VIP Aset 1.jpg",
    tipe: "VIP Room",
    desc: "Menghadirkan kemewahan untuk memberikan pengalaman eksklusif bagi Anda yang menginginkan kenyamanan dan layanan terbaik. Dengan desain...",
    harga: 800000,
    logoFacility: [
      "/assets/icon/bed.svg",
      "/assets/icon/guest.svg",
      "/assets/icon/ukuran.svg",
    ],
    textFacility: ["Twin Bed", "2 Guests", "42㎡ – 45㎡"],
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

export function formatNumber(number) {
  return Intl.NumberFormat("id-Id").format(number);
}
