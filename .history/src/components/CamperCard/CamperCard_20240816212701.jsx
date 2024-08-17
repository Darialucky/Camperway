import React from "react";
import css from "./CamperCard.module.css";

const CamperCard = ({ camper }) => {
  return (
    <div className={css.camperCard}>
      <div className={css.imageContainer}>
        {camper.gallery && camper.gallery[0] && (
          <img
            src={camper.gallery[0]}
            alt={`Camper ${camper.name}`}
            className={css.image}
          />
        )}
      </div>
      <div className={css.textContent}>
        <div className={css.header}>
          <h3>{camper.name}</h3>
          <p className={css.price}>€{camper.price} </p>
        </div>
        <div className={css.ratingLocation}>
          <span>⭐ {camper.rating}</span>
          <span>{camper.location}</span>
        </div>
        <p className={css.description}>Description: {camper.description}</p>
        <div className={css.details}>
          <p>
            <span className={css.icon}>👫</span> {camper.adults} adults,{" "}
            {camper.children} children
          </p>
          <p>
            <span className={css.icon}>⚙️</span> {camper.transmission}
          </p>
          <p>
            <span className={css.icon}>⛽</span> {camper.engine}
          </p>
        </div>

        <button className={css.showMoreBtn}>Show more</button>
      </div>
    </div>
  );
};

export default CamperCard;
