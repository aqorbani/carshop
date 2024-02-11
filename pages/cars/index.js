import Categories from "@/components/modules/Categories";
import SearchBar from "@/components/modules/SearchBar";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";

export default function Cars() {
  return (
    <div>
      <SearchBar />
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
}
