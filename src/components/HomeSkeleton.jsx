import Skeleton from "./Skeleton";
import styles from "./HomeSkeleton.module.css";

export default function HomeSkeleton() {
  return (
    <section className={styles.grid} aria-label="Henter events">
      {Array.from({ length: 6 }, (_, index) => (
        <article className={styles.card} key={index}>
          <Skeleton className={styles.image} />
          <div className={styles.content}>
            <Skeleton className={styles.category} />
            <Skeleton className={styles.title} />
            <Skeleton className={styles.text} />
            <Skeleton className={styles.textShort} />
            <Skeleton className={styles.button} />
          </div>
        </article>
      ))}
    </section>
  );
}
