import { NavLink } from "react-router";
import styles from "./Navbar.module.css";

function getNavLinkClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.brand} to="/">
        mellemrum<span>.</span>
      </NavLink>
      <div className={styles.links}>
        <NavLink to="/" className={getNavLinkClass}>
          Events
        </NavLink>
        <NavLink to="/om" className={getNavLinkClass}>
          Om Mellemrum
        </NavLink>
      </div>
    </nav>
  );
}
