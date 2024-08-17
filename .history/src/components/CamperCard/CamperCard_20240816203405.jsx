import React, { useState, useEffect } from "react";
import css from "./CamperCard.module.css"; // Імпорт CSS модулів

const CamperCard = ({ camper, onToggleFavorite, favoriteCampers }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(favoriteCampers.some((favorite) => favorite.id === camper.id));
  }, [camper.id, favoriteCampers]);

  const handleFavoriteClick = async () => {
    if (isFav) {
      const favorite = favoriteCampers.find((f) => f.id === camper.id);
      await fetch(`/api/favorites/${favorite.id}`, { method: "DELETE" });
      setIsFav(false);
      onToggleFavorite(camper);
    } else {
      await fetch("/api/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ camperId: camper.id }),
      });
      setIsFav(true);
      onToggleFavorite(camper);
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
