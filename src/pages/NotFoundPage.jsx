import { Link } from "react-router";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <>
      <main className={styles.notFound}>
        <header>
          <h1 className={styles.title}>404</h1>
        </header>
        <p>Siden, du leder efter, findes ikke.</p>
        <Link to="/" className={styles.link}>
          Gå til forsiden
        </Link>
      </main>
    </>
  );
}
