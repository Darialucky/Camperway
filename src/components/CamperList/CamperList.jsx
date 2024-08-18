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

export const CamperList = ({ showFavorites = false }) => {
  const dispatch = useDispatch();

  const campers = useSelector(
    showFavorites ? selectFavoriteCampers : selectCampers
  );
  const page = useSelector(selectPage);
  const isLoadBtnVisible = useSelector(selectLoadBtn);
  const isFavoritesEmpty = showFavorites && campers.length === 0;

  const handleLoadMore = () => {
    dispatch(fetchCampers(page + 1));
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
      <div className={css.camperListOne}>
        {campers.length > 0 ? (
          campers.map((camper) => (
            <CamperCard key={camper._id} camper={camper} />
          ))
        ) : (
          <p>No campers available.</p>
        )}
      </div>
      {!showFavorites && campers.length > 0 && isLoadBtnVisible && (
        <button onClick={handleLoadMore} className={css.loadMoreBtn}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CamperList;
