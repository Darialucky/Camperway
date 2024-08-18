import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { CamperList } from "../../components/CamperList/CamperList";
import css from "./Catalog.module.css";
import { fetchCampers } from "../../redux/campers/operations";
import {
  selectCampers,
  selectLoading,
  selectError,
} from "../../redux/campers/selectors";

export const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers(1));
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error occurred!</p>;

  return (
    <div className={css.container}>
      <Sidebar />
      <main className={css["main-content"]}>
        <CamperList campers={campers} />
      </main>
    </div>
  );
};

export default Catalog;
