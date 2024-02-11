import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";

export default function Cars() {
  return (
    <div>
      <CarsPage data={carsData} />
    </div>
  );
}
