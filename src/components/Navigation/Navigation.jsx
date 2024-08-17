import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.active : undefined)}
        end // Додає `end` для точного збігу з кореневим шляхом
      >
        Home
      </NavLink>
      <NavLink
        to="/catalog"
        className={({ isActive }) => (isActive ? css.active : undefined)}
      >
        Catalog
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) => (isActive ? css.active : undefined)}
      >
        Favorites
      </NavLink>
    </nav>
  );
};

export default Navigation;
