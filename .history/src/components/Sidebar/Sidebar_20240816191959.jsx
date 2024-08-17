import React from "react";
import css from "./Sidebar.module.css";
import Icon from "../Icon";

export const Sidebar = () => {
  return (
    <aside className={css.sidebar}>
      <div className={css.filters}>
        <div className={css.filterLocation}>
          <h3 className={css.location}>Location</h3>
          <div className={css.inputWrapper}>
            <span className={css.icon}>
              <Icon
                name="icon-map-pin"
                className={css.icon}
                width={18}
                height={20}
              />
            </span>
            <input type="text" placeholder="City" />
          </div>
        </div>
        <h4 className={css.filtersText}>Filters</h4>
        <div className={css.filterSection}>
          <h3 className={css.equipment}>Vehicle Equipment</h3>
          <hr className={css.divider} />
          <div className={css.equipmentFilters}>
            <FilterButton
              icon={<Icon name="icon-ac" width={32} height={60} />}
              value="AC"
            />
            <FilterButton
              icon={<Icon name="icon-avtomat" width={79} height={60} />}
              value="Automatic"
            />
            <FilterButton
              icon={<Icon name="icon-Kitchen" width={59} height={60} />}
              value="Kitchen"
            />
            <FilterButton
              icon={<Icon name="icon-tv" width={32} height={60} />}
              value="TV"
            />
            <FilterButton
              icon={<Icon name="icon-wc" width={90} height={60} />}
              value="Shower/WC"
            />
          </div>
        </div>

        <div className={css.filterSection}>
          <h3 className={css.equipment}>Vehicle Type</h3>
          <hr className={css.divider} />
          <div className={css.typeFilters}>
            <FilterButton
              icon={<Icon name="icon-van" width={40} height={57} />}
              value="Van"
            />
            <FilterButton
              icon={<Icon name="icon-fully" width={80} height={76} />}
              value="Fully Integrated"
            />
            <FilterButton
              icon={<Icon name="icon-alcove" width={52} height={56} />}
              value="Alcove"
            />
          </div>
        </div>

        <div className={css.searchContainer}>
          <button className={css.searchButton}>Search</button>
        </div>
      </div>
    </aside>
  );
};

const FilterButton = ({
  icon,
  label,
  value,
  checked,
  onChange,
  type,
  name,
}) => {
  return (
    <div className={css.filterButton}>
      <input
        type={type || "checkbox"}
        value={value}
        checked={checked}
        onChange={onChange}
        id={value}
        name={name}
        className={css.input}
      />
      <label htmlFor={value} className={css.buttonLabel}>
        {icon}
        <span>{label}</span>
      </label>
    </div>
  );
};
