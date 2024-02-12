import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

export default function FilterCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  const filteredData = carsData.filter(
    (car) => car.price >= min && car.price <= max
  );

  return <CarsPage data={filteredData} />;
}
