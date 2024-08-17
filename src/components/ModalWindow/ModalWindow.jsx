import React, { useState } from "react";
import ReactModal from "react-modal";
import Icon from "../Icon";
import FeaturesForm from "../FeaturesForm/FeaturesForm";
import ReviewsForm from "../ReviewsForm/ReviewsForm";
import css from "./ModalWindow.module.css";
import clsx from "clsx";

ReactModal.setAppElement("#root");

const ModalWindow = ({ isModalOpen, closeModal, camper }) => {
  const [activeTab, setActiveTab] = useState("features");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      borderRadius: "20px",
      padding: "0px",
      width: "982px",
      height: "720px",
      zIndex: 2000,
    },
    overlay: {
      backgroundColor: "rgba(17, 18, 19, 0.4)",
      zIndex: 2000,
    },
  };

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className={css.modalContent}>
        <div>
          <h3 className={css.camperName}>{camper.name}</h3>
          <button
            type="button"
            onClick={closeModal}
            className={css.closeButton}
          >
            <Icon name="icon-close" width={32} height={32} />
          </button>
          <div className={css.camperAdditionalInfo}>
            <div className={css.iconContainer}>
              <span className={css.star}>⭐</span>
              <p className={css.rating}>
                {`${camper.rating} (${camper.reviews.length} Reviews)`}
              </p>
            </div>
            <div className={css.iconContainer}>
              <Icon
                name="icon-map-pin"
                width={16}
                height={16}
                stroke="#101828"
              />
              <p>{camper.location}</p>
            </div>
          </div>
          <p className={css.price}>&#8364;{camper.price}.00</p>
          <ul className={css.gallery}>
            {camper.gallery.map((image) => (
              <li key={image}>
                <img
                  src={image}
                  alt={camper.name}
                  className={css.galleryImage}
                />
              </li>
            ))}
          </ul>
          <p className={css.description}>{camper.description}</p>
        </div>
        <div>
          <div className={css.buttonContainer}>
            <button
              type="button"
              onClick={() => setActiveTab("features")}
              className={clsx(css.infoButton, {
                [css.selectedButton]: activeTab === "features",
              })}
            >
              Features
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("reviews")}
              className={clsx(css.infoButton, {
                [css.selectedButton]: activeTab === "reviews",
              })}
            >
              Reviews
            </button>
          </div>
          {activeTab === "features" ? (
            <FeaturesForm camper={camper} />
          ) : (
            <ReviewsForm camper={camper} />
          )}
        </div>
      </div>
    </ReactModal>
  );
};

export default ModalWindow;
