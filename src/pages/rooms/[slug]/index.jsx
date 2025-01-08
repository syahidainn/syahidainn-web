import RoomsItem from "@/components/RoomsItem";
import { useParams } from "next/navigation";

export default function RoomsPage() {
  const params = useParams();
  const slug = params?.slug;

  const detailRoom = [
    {
      id: 1,
      tipe: "Deluxe Double",
      imageCard: "Deluxe Double.png",
      desc: "Nikmati pengalaman menginap yang menenangkan di Deluxe Double Room, tempat di mana kesederhanaan bertemu dengan keanggunan. Dirancang untuk memberikan kenyamanan yang esensial.",
      logoFacility1: "/assets/icon/bed.png",
      logoFacility2: "/assets/icon/guest.png",
      logoFacility3: "/assets/icon/ukuran.png",
      textFacility1: "Twin Bed",
      textFacility2: "2 Guest",
      textFacility3: "40m² - 45m²",
      price: "Rp. 400.000/night", // Harga untuk Deluxe Double
    },
    {
      id: 2,
      tipe: "Deluxe Triple",
      imageCard: "Deluxe Triple.png",
      desc: "Memberikan pengalaman menginap yang tak terlupakan dengan fasilitas unggulan dengan tiga tempat tidur yang nyaman dan ruang yang luas, kamar ini adalah pilihan sempurna untuk keluarga atau teman.",
      logoFacility1: "/assets/icon/bed.png",
      logoFacility2: "/assets/icon/guest.png",
      logoFacility3: "/assets/icon/ukuran.png",
      textFacility1: "Triple Bed",
      textFacility2: "3 Guest",
      textFacility3: "40m² - 45m²",
      price: "Rp. 400.000/night", // Harga untuk Deluxe Triple
    },
    {
      id: 3,
      tipe: "Superior Room",
      imageCard: "Superior Double.png",
      desc: "Pilihan ideal bagi Anda yang menginginkan kenyamanan berkelas dengan harga yang bersaing. Superior Room dirancang dengan gaya modern dan elegan, menghadirkan perpaduan sempurna antara fungsionalitas, dan kemewahan yang menciptakan suasana menginap yang menyegarkan.",
      logoFacility1: "/assets/icon/bed.png",
      logoFacility2: "/assets/icon/guest.png",
      logoFacility3: "/assets/icon/ukuran.png",
      textFacility1: "Twin Bed",
      textFacility2: "2 Guest",
      textFacility3: "42m² - 45m²",
      price: "Rp. 500.000/night", // Harga untuk Superior Room
    },
    {
      id: 4,
      tipe: "VIP Room",
      imageCard: "VIP Room.png",
      desc: "Menghadirkan kemewahan untuk memberikan pengalaman eksklusif bagi Anda yang menginginkan kenyamanan dan layanan terbaik. Dengan desain yang berkelas dan fasilitas unggulan, VIP Room menciptakan suasana yang tenang dan istimewa, menjadikan setiap momen menginap sebuah kenangan yang tak terlupakan.",
      logoFacility1: "/assets/icon/bed.png",
      logoFacility2: "/assets/icon/guest.png",
      logoFacility3: "/assets/icon/ukuran.png",
      textFacility1: "King Bed",
      textFacility2: "2 Guest",
      textFacility3: "42m² - 45m²",
      price: "Rp. 700.000/night", // Harga untuk VIP Room
    },
  ];

  // Filter ruangan berdasarkan slug
  const selectedRoom = detailRoom.find((room) => room.id === parseInt(slug));

  return (
    <div>
      <div id={slug}>
        {/* Menampilkan RoomsItem saja */}
        {selectedRoom && (
          <RoomsItem
            tipe={selectedRoom.tipe}
            imageCard={selectedRoom.imageCard}
            desc={selectedRoom.desc}
            logoFacility1={selectedRoom.logoFacility1}
            logoFacility2={selectedRoom.logoFacility2}
            logoFacility3={selectedRoom.logoFacility3}
            textFacility1={selectedRoom.textFacility1}
            textFacility2={selectedRoom.textFacility2}
            textFacility3={selectedRoom.textFacility3}
            price={selectedRoom.price} // Menambahkan prop price
          />
        )}
      </div>
    </div>
  );
}