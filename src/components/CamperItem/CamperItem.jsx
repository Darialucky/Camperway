import React, { useState } from "react";
import css from "./CamperItem.module.css";
import toast from "react-hot-toast";

const CamperItem = ({ camper, setIsOpen }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleOpenModal = () => {
    console.log("Opening modal for camper:", camper);
    setIsOpen(true);
  };

  return (
    <div className={css.camperItem}>
      <h3>{camper.name}</h3>
      <p>Location: {camper.location}</p>
      <p>
        Details:{" "}
        {camper.details
          ? JSON.stringify(camper.details)
          : "No details available"}
      </p>
      <p>Type: {camper.form}</p>
      <p>Price: €{camper.price}</p>
      <button
        onClick={handleOpenModal}
        type="button"
        className="flex py-3 bg-[#3470ff] w-[100%] justify-center items-center text-white rounded-xl text-[14px] font-semibold leading-[1.43rem] hover:bg-[#0b44cd]"
      >
        Learn more
      </button>
    </div>
  );
};

export default CamperItem;
