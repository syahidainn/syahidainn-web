import RoomsItem from "@/components/RoomsItem";
import { useParams } from "next/navigation";

export default function RoomsPage() {
  const params = useParams();
  const slug = params?.slug;

  const index = parseInt(slug) - 1;

  const detailRoom = [
    {
      id: { slug },
      tipe: "delux",
    },
    {
      id: { slug },
      tipe: "vip",
    },
  ];

  console.log(typeof index);
  console.log(typeof slug);
  return (
    <div>
      <div id={slug}>
        <RoomsItem tipe={detailRoom[slug - 1]?.tipe} />
      </div>
    </div>
  );
}
