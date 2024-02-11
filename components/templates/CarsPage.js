import Cards from "../modules/Cards";
import styles from "./CarsPage.module.css";

export default function CarsPage({ data }) {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <Cards {...car} key={car.id} />
      ))}
    </div>
  );
}
