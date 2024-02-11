import Cards from "../modules/Cards";
import styles from "./Cars.module.css";

export default function CarsPage({ data }) {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <Cards {...car} key={car.id} />
      ))}
    </div>
  );
}
