import React, { useState, useEffect } from "react";
import css from "./CamperCard.module.css"; // Імпорт CSS модулів

const CamperCard = ({ camper, onToggleFavorite, isFavorite }) => {
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
        <button
          onClick={() => onToggleFavorite(camper)}
          className={`${css.favoriteButton} ${isFavorite ? css.favorite : ""}`}
        >
          ❤️
        </button>
      </div>
      <div className={css.textContent}>
        <div className={css.header}>
          <h3>{camper.name}</h3>
          <p className={css.price}>{camper.price} USD</p>
        </div>
        <div className={css.ratingLocation}>
          <span>⭐ {camper.rating}</span>
          <span>{camper.location}</span>
        </div>
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
        <p className={css.description}>Description: {camper.description}</p>
        <button className={css.showMoreBtn}>Show more</button>
      </div>
    </div>
  );
};

export default CamperCard;
