import RoomsItem from "@/components/RoomsItem";
import { rooms } from "@/lib/constants";
import { useParams } from "next/navigation";

export default function RoomsPage() {
  const params = useParams();
  const slug = params?.slug;

  // Filter ruangan berdasarkan slug
  const selectedRoom = rooms.find((room) => room.id === parseInt(slug));

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
            logoFacility={selectedRoom.logoFacility}
            textFacility={selectedRoom.textFacility}
            harga={selectedRoom.harga} // Menambahkan prop price
            facilities={selectedRoom.facilities} // Menambahkan prop facilities
            facilityLogos={selectedRoom.facilityLogos} // Menambahkan prop facilityLogos
            galleryImages={selectedRoom.galleryImages} // Menambahkan prop galleryImages
          />
        )}
      </div>
    </div>
  );
}
