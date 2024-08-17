import React from "react";
import css from "./CamperCard.module.css";
import Icon from "../Icon";

const CamperCard = ({ camper }) => {
  const reviewsCount = camper.reviews ? camper.reviews.length : 0;

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
          <div className={css.rating}>
            <span className={css.star}>⭐</span>
            <span className={css.reviewText}>
              {camper.rating} ({reviewsCount} Reviews)
            </span>
          </div>
          <span>
            <Icon
              name="icon-map-pin"
              className={css.icon}
              width={16}
              height={16}
            />
            {camper.location}
          </span>
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
