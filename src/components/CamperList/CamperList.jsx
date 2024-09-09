import { useSelector, useDispatch } from "react-redux";
import CamperCard from "../CamperCard/CamperCard";
import css from "./CamperList.module.css";
import {
  selectCampers,
  selectPage,
  selectLoadBtn,
  selectFavoriteCampers,
} from "../../redux/campers/selectors";
import { fetchCampers } from "../../redux/campers/operations";
import { changePage } from "../../redux/campers/slice";

export const CamperList = ({ showFavorites = false }) => {
  const dispatch = useDispatch();

  const campers = useSelector(
    showFavorites ? selectFavoriteCampers : selectCampers
  );
  const page = useSelector(selectPage);
  const isLoadBtnVisible = useSelector(selectLoadBtn);
  const isFavoritesEmpty = showFavorites && campers.length === 0;

  const handleLoadMore = (e) => {
    e.preventDefault();
    dispatch(fetchCampers(page + 1))
      .unwrap()
      .then((response) => {
        dispatch(changePage());
      })
      .catch((error) => {});
  };

  if (isFavoritesEmpty) {
    return (
      <div className={css.camperListWrapper}>
        <p>No favorite campers found.</p>
      </div>
    );
  }

  return (
    <div className={css.camperListWrapper}>
      <ul className={css.camperListOne}>
        {campers.length > 0 ? (
          campers.map((camper) => (
            <li key={camper._id}>
              <CamperCard camper={camper} />
            </li>
          ))
        ) : (
          <p>No campers available.</p>
        )}
      </ul>
      {!showFavorites && campers.length > 0 && isLoadBtnVisible && (
        <button
          type="button"
          onClick={handleLoadMore}
          className={css.loadMoreBtn}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default CamperList;
