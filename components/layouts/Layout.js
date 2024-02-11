import Link from "next/link";
import styles from "./Layout.module.css";
export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Car Shop</h2>
          <p>choose and buy your favorite car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>Car shop &copy;</footer>
    </>
  );
}
