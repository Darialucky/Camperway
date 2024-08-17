import React from "react";
import css from "./Sidebar.module.css";
import Icon from "../Icon";

// Закоментовано імпорти Redux
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setLocation,
//   setSelectedEquipment,
//   setVehicleType,
// } from "../../redux/filters/slice";

export const Sidebar = () => {
  // Закоментовано використання Redux
  // const dispatch = useDispatch();
  // const { location, selectedEquipment, selectedType } = useSelector(
  //   (state) => state.filters.filters
  // );

  // Закоментовано обробники змін фільтрів
  // const handleLocationChange = (event) => {
  //   const value = event.target.value;
  //   dispatch(setLocation(value));
  // };

  // const handleEquipmentChange = (event) => {
  //   const value = event.target.value;
  //   dispatch(
  //     setSelectedEquipment(
  //       selectedEquipment.includes(value)
  //         ? selectedEquipment.filter((item) => item !== value)
  //         : [...selectedEquipment, value]
  //     )
  //   );
  // };

  // const handleTypeChange = (event) => {
  //   const value = event.target.value;
  //   dispatch(setVehicleType(value));
  // };

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
            <input
              type="text"
              placeholder="City"
              // Закоментовано обробник зміни значення
              // value={location}
              // onChange={handleLocationChange}
            />
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
              // Закоментовано обробник зміни значення
              // checked={selectedEquipment.includes("AC")}
              // onChange={handleEquipmentChange}
            />
            <FilterButton
              icon={<Icon name="icon-avtomat" width={79} height={60} />}
              value="Automatic"
              // Закоментовано обробник зміни значення
              // checked={selectedEquipment.includes("Automatic")}
              // onChange={handleEquipmentChange}
            />
            <FilterButton
              icon={<Icon name="icon-Kitchen" width={59} height={60} />}
              value="Kitchen"
              // Закоментовано обробник зміни значення
              // checked={selectedEquipment.includes("Kitchen")}
              // onChange={handleEquipmentChange}
            />
            <FilterButton
              icon={<Icon name="icon-tv" width={32} height={60} />}
              value="TV"
              // Закоментовано обробник зміни значення
              // checked={selectedEquipment.includes("TV")}
              // onChange={handleEquipmentChange}
            />
            <FilterButton
              icon={<Icon name="icon-wc" width={90} height={60} />}
              value="Shouwer/WC"
              // Закоментовано обробник зміни значення
              // checked={selectedEquipment.includes("Shouwer/WC")}
              // onChange={handleEquipmentChange}
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
              // Закоментовано обробник зміни значення
              // checked={selectedType === "Van"}
              // onChange={handleTypeChange}
            />
            <FilterButton
              icon={<Icon name="icon-fully" width={80} height={76} />}
              value="Fully Integrated"
              // Закоментовано обробник зміни значення
              // checked={selectedType === "Fully Integrated"}
              // onChange={handleTypeChange}
            />
            <FilterButton
              icon={<Icon name="icon-alcove" width={52} height={56} />}
              value="Alcove"
              // Закоментовано обробник зміни значення
              // checked={selectedType === "Alcove"}
              // onChange={handleTypeChange}
            />
          </div>
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
