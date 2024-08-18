import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToFavorite, removeFromFavorite } from "../../redux/campers/slice";
import css from "./CamperCard.module.css";
import Icon from "../Icon";
import ModalWindow from "../ModalWindow/ModalWindow";
import { selectFavoriteCampers } from "../../redux/campers/selectors";

const CamperCard = ({ camper }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const favoriteCampers = useSelector(selectFavoriteCampers);

  const isFavorite = favoriteCampers
    ? favoriteCampers.some((item) => item._id === camper._id)
    : false;

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(camper._id));
    } else {
      dispatch(addToFavorite(camper));
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
          <div className={css.priceFavoriteContainer}>
            <p className={css.price}>€{camper.price.toFixed(2)}</p>
            <button
              className={`${css.favoriteButton} ${
                isFavorite ? css.favoriteActive : ""
              }`}
              onClick={toggleFavorite}
            >
              <span
                style={{
                  fontSize: "24px",
                  color: isFavorite ? "#E44848" : "#e0e0e0",
                }}
              >
                ♥
              </span>
            </button>
          </div>
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
          <p className={css.iconContainer}>
            <Icon
              name="icon-Users"
              className={css.icon}
              width={16}
              height={16}
            />
            {camper.adults} adults
          </p>
          <p className={css.iconContainer}>
            <Icon
              name="icon-avtomatmin"
              className={css.icon}
              width={16}
              height={16}
            />
            Automatic
          </p>
          <p className={css.iconContainer}>
            <Icon
              name="icon-petrol"
              className={css.icon}
              width={16}
              height={16}
            />
            Petrol
          </p>
          <p className={css.iconContainer}>
            <Icon
              name="icon-kithenmin"
              className={css.icon}
              width={16}
              height={16}
            />
            Kitchen
          </p>
          <p className={css.iconContainer}>
            <Icon name="icon-bed" className={css.icon} width={16} height={16} />
            {camper.details.beds} beds
          </p>
          <p className={css.iconContainer}>
            <Icon
              name="icon-acmin"
              className={css.icon}
              width={16}
              height={16}
            />
            AC
          </p>
        </div>
        <button className={css.showMoreBtn} onClick={openModal}>
          Show more
        </button>
        <ModalWindow
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          camper={camper}
        />
      </div>
    </div>
  );
};

export default CamperCard;
