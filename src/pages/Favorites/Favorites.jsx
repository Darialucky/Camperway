import { useSelector } from "react-redux";
import CamperList from "../../components/CamperList/CamperList";
import { selectFavoriteCampers } from "../../redux/campers/selectors";

const Favorites = () => {
  const favoriteCampers = useSelector(selectFavoriteCampers);
  return (
    <div>
      <h1>Favorites</h1>
      <CamperList showFavorites={true} />
    </div>
  );
};

export default Favorites;
