import { NavLink } from "react-router";
import style from "./Navbar.module.css";

function getNavLinkClass({ isActive }) {
  return isActive ? `${style.link} ${style.active}` : style.link;
}

export default function Navbar() {
  return (
    <nav className={style.nav}>
      <NavLink className={style.brand} to="/">
        mellemrum<span>.</span>
      </NavLink>
      <div className={style.links}>
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
