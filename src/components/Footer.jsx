import { Link } from "react-router";
import style from "./Footer.module.css";

export default function Footer() {
   return (
    <footer className={style.footer}>
    <div className={style.top}>
        <div className={style.intro}>
        <p className={style.brand}>
            mellemrum<span>.</span>
        </p>
        <p>Udvalgte kulturoplevelser og nye perspektiver på Aarhus.</p>
        </div>
        <nav className={style.links} aria-label="Footer">
        <div className={style.linkGroup}>
            <p className={style.heading}>Udforsk</p>
            <Link to="/">Events</Link>
            <Link to="/om">Om Mellemrum</Link>
        </div>
        <div className={style.linkGroup}>
            <p className={style.heading}>For arrangører</p>
            <Link to="/tilmeldinger">Se tilmeldinger</Link>
            <a href="mailto:hej@mellemrum.dk">Kontakt os</a>
        </div>
        </nav>
    </div>
    <div className={style.bottom}>
        <p className={style.meta}>© 2025 Mellemrum</p>
        <p>Aarhus, Danmark</p>
    </div>
    </footer>
    );
}