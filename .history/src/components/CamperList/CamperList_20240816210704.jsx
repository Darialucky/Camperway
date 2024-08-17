import React, { useState } from "react";
import CamperCard from "../CamperCard/CamperCard";
import css from "./CamperList.module.css";

export const CamperList = ({ campers }) => {
  const [currentPage, setCurrentPage] = useState(1);
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
        {currentCampers.map((camper, index) => (
          <CamperCard key={index} camper={camper} />
        ))}
      </div>
      <div className={css.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button onClick={() => handlePageChange(currentPage + 1)}>
          Load more
        </button>
      </div>
    </div>
  );
};

export default CamperList;
