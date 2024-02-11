import styles from "./Cars.module.css";

export default function CarsPage({ data }) {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <div key={car.id}>
          <p>{car.name}</p>
        </div>
      ))}
    </div>
  );
}
