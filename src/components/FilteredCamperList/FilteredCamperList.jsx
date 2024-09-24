import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilteredCampers } from "../../redux/filters/operation";
import {
  selectFilteredCampers,
  selectLoading,
  selectError,
} from "../../redux/filters/selectors";

const FilteredCamperList = ({ filters }) => {
  const dispatch = useDispatch();
  const filteredCampers = useSelector(selectFilteredCampers);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchFilteredCampers(filters));
  }, [dispatch, filters]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading campers!</div>;

  return (
    <div>
      {filteredCampers.map((camper) => (
        <div key={camper._id}>{camper.name}</div>
      ))}
    </div>
  );
};

export default FilteredCamperList;
