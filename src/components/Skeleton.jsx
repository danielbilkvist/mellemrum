import styles from "./Skeleton.module.css";

export default function Skeleton({ className = "" }) {
  return (
    <span className={`${styles.skeleton} ${className}`} aria-hidden="true" />
  );
}
