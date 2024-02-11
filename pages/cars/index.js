import Categories from "@/components/modules/Categories";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";

export default function Cars() {
  return (
    <div>
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
}
