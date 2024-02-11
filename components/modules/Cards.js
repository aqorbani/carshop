import Image from "next/image";
import styles from "./Cards.module.css";
import Location from "../icons/Location";
import Link from "next/link";

export default function Cards(props) {
  const { id, name, model, year, distance, location, image, price } = props;
  return (
    <Link href={`/cars/${id}`}>
      <div className={styles.container}>
        <Image
          src={image}
          alt={name}
          width={300}
          height={230}
          className={styles.image}
        />
        <h4 className={styles.title}>{`${name} ${model}`}</h4>
        <p className={styles.detail}>{`${year} . ${distance}km`}</p>
        <div className={styles.footer}>
          <p className={styles.price}>$ {price}</p>
          <div className={styles.location}>
            <p>{location}</p>
            <Location />
          </div>
        </div>
      </div>
    </Link>
  );
}
