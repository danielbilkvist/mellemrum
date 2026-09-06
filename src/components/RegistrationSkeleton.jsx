import Skeleton from "./Skeleton";
import styles from "./RegistrationSkeleton.module.css";

export default function RegistrationSkeleton() {
  return (
    <div className={styles.list} aria-label="Henter tilmeldinger">
      {Array.from({ length: 6 }, (_, index) => (
        <div className={styles.row} key={index}>
          <Skeleton className={styles.name} />
          <Skeleton className={styles.event} />
          <Skeleton className={styles.date} />
          <Skeleton className={styles.status} />
        </div>
      ))}
    </div>
  );
}
