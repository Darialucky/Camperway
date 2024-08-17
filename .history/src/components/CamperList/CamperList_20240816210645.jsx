import React, { useState } from "react";
import CamperCard from "../CamperCard/CamperCard";
import css from "./CamperList.module.css";

export const CamperList = ({ campers, onToggleFavorite, favoriteCampers }) => {
  const [visibleCount, setVisibleCount] = useState(4); // Кількість видимих кемперів

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Додає 4 до кількості видимих кемперів
  };

  const currentCampers = campers.slice(0, visibleCount); // Вибирає видимі кемпери

  return (
    <div>
      <div className={css.camperListOne}>
        {currentCampers.map((camper) => (
          <CamperCard
            key={camper.id}
            camper={camper}
            onToggleFavorite={onToggleFavorite}
            isFavorite={favoriteCampers.some((c) => c.id === camper.id)}
          />
        ))}
      </div>
      {visibleCount < campers.length && (
        <button onClick={handleLoadMore} className={css.loadMoreBtn}>
          Load more
        </button>
      )}
    </div>
  );
};
