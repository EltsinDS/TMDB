import { NavLink } from "react-router-dom";
import "./header.style.css";

export function Header() {
  return (
    <div className="box-header">
      <NavLink to="/" className="link-film">
        <div>Фильмы</div>
      </NavLink>
      <NavLink to="persons" className="link-actors">
        <div>Актеры</div>
      </NavLink>
    </div>
  );
}
