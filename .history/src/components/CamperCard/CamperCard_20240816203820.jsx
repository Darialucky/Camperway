// src/components/CamperCard/CamperCard.jsx
import React, { useState, useEffect } from "react";
import css from "./CamperCard.module.css";
import { isFavorite, addFavorite, removeFavorite } from "../../pages/Favorites";

const CamperCard = ({ camper, favoriteCampers = [], onToggleFavorite }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(isFavorite(camper.id, favoriteCampers));
  }, [camper.id, favoriteCampers]);

  const handleFavoriteClick = async () => {
    try {
      if (isFav) {
        const favorite = favoriteCampers.find((f) => f.camperId === camper.id);
        await removeFavorite(favorite.id);
        setIsFav(false);
        onToggleFavorite(camper);
      } else {
        await addFavorite(camper.id);
        setIsFav(true);
        onToggleFavorite(camper);
      }
    } catch (error) {
      console.error("Error updating favorite:", error);
    }
  };

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
          onClick={handleFavoriteClick}
          className={`${css.favoriteButton} ${isFav ? css.favorite : ""}`}
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
