import Back from "@/components/icons/Back";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";
import styles from "@/styles/CategoryPages.module.css";

export default function Type() {
  const router = useRouter();
  const { type } = router.query;
  const cars = carsData.filter((car) => car.category === type);
  const backHandler = () => {
    router.back();
  };
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.back} onClick={backHandler}>
          <Back />
          <p>back</p>
        </div>
      </div>
      <CarsPage data={cars} />
    </div>
  );
}
