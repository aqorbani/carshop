import carsData from "@/data/carsData";
import { useRouter } from "next/router";

export default function CarDetails() {
  const router = useRouter();
  const { carId } = router.query;
  const carDetails = carsData[carId - 1];
  return <div>{carDetails.name}</div>;
}
