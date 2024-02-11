import carsData from "@/data/carsData";
import { useRouter } from "next/router";
import CarDetails from "@/components/templates/CarDetails";

export default function CarDetailPage() {
  const router = useRouter();
  const { carId } = router.query;
  const carDetails = carsData[carId - 1];
  return <CarDetails {...carDetails} />;
}
