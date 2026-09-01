import { Link } from "react-router";
import styles from "./Footer.module.css";

export default function Footer() {
   return (
    <footer className={styles.footer}>
    <div className={styles.top}>
        <div className={styles.intro}>
        <p className={styles.brand}>
            mellemrum<span>.</span>
        </p>
        <p>Udvalgte kulturoplevelser og nye perspektiver på Aarhus.</p>
        </div>
        <nav className={styles.links} aria-label="Footer">
        <div className={styles.linkGroup}>
            <p className={styles.heading}>Udforsk</p>
            <Link to="/">Events</Link>
            <Link to="/om">Om Mellemrum</Link>
        </div>
        <div className={styles.linkGroup}>
            <p className={styles.heading}>For arrangører</p>
            <Link to="/tilmeldinger">Se tilmeldinger</Link>
            <a href="mailto:hej@mellemrum.dk">Kontakt os</a>
        </div>
        </nav>
    </div>
    <div className={styles.bottom}>
        <p className={styles.meta}>© 2025 Mellemrum</p>
        <p>Aarhus, Danmark</p>
    </div>
    </footer>
    );
}