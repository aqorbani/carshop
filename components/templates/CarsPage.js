import Cards from "../modules/Cards";
import styles from "./CarsPage.module.css";

export default function CarsPage({ data }) {
  if (data.length < 1) {
    return (
      <div className={styles.notfound}>
        <p>No items found</p>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <Cards {...car} key={car.id} />
      ))}
    </div>
  );
}
