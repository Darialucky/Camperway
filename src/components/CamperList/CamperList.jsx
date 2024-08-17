import React, { useState } from "react";
import CamperCard from "../CamperCard/CamperCard";
import css from "./CamperList.module.css";

export const CamperList = ({ campers }) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const currentCampers = campers.slice(0, visibleCount);

  return (
    <div className={css.camperListWrapper}>
      <div className={css.camperListOne}>
        {currentCampers.map((camper) => (
          <CamperCard key={camper._id} camper={camper} />
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

export default CamperList;
