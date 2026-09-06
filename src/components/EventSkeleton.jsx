import Skeleton from "./Skeleton";
import styles from "./EventSkeleton.module.css";

export default function EventSkeleton() {
  return (
    <section className={styles.page} aria-label="Henter event">
      <Skeleton className={styles.image} />
      <div className={styles.content}>
        <Skeleton className={styles.category} />
        <Skeleton className={styles.title} />
        <Skeleton className={styles.summary} />
        <Skeleton className={styles.line} />
        <Skeleton className={styles.line} />
        <Skeleton className={styles.lineShort} />
      </div>
    </section>
  );
}
