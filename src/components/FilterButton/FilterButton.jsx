import React from "react";
import css from "./FilterButton.module.css";

export const FilterButton = ({ icon, label }) => {
  return (
    <div className={css.filterButton}>
      {icon}
      <span>{label}</span>
    </div>
  );
};
