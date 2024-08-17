import React from "react";
import CamperCard from "../CamperCard/CamperCard";
import css from "./CamperList.module.css";

export const CamperList = ({ campers, onToggleFavorite, favoriteCampers }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 4;

  const indexOfLastCamper = currentPage * itemsPerPage;
  const indexOfFirstCamper = indexOfLastCamper - itemsPerPage;
  const currentCampers = campers.slice(indexOfFirstCamper, indexOfLastCamper);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

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
      <div className={css.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
};
