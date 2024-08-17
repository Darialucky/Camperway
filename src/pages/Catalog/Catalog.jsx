import { useEffect, useState } from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { CamperList } from "../../components/CamperList/CamperList";
import css from "./Catalog.module.css";
import { getCampers } from "../../api/api";

export const Catalog = () => {
  const [campers, setCampers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [filters, setFilters] = useState({
    location: "",
    selectedEquipment: [],
    selectedType: [],
  });

  useEffect(() => {
    const loadCampers = async () => {
      setIsLoading(true);
      try {
        const data = await getCampers(1); // Завантаження кемперів для сторінки 1
        setCampers(data);
      } catch (error) {
        setIsError(true);
        console.error("Failed to fetch campers:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCampers();
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters({
      location: newFilters.location,
      selectedEquipment: newFilters.selectedEquipment,
      selectedType: newFilters.selectedType,
    });
  };

  const filteredCampers = campers.filter((camper) => {
    const matchesLocation =
      !filters.location ||
      camper.location.toLowerCase().includes(filters.location.toLowerCase());

    const matchesEquipment =
      filters.selectedEquipment.length === 0 ||
      filters.selectedEquipment.every((eq) =>
        Object.keys(camper.details).some(
          (detailKey) =>
            detailKey.toLowerCase() === eq.toLowerCase() &&
            (camper.details[detailKey] === 1 ||
              camper.details[detailKey] === true ||
              String(camper.details[detailKey]).toLowerCase() ===
                eq.toLowerCase())
        )
      );

    const matchesType =
      filters.selectedType.length === 0 ||
      filters.selectedType.includes(camper.form);

    return matchesLocation && matchesEquipment && matchesType;
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error occurred!</p>;

  return (
    <div className={css.container}>
      <Sidebar onFilterChange={handleFilterChange} />
      <main className={css["main-content"]}>
        <CamperList campers={filteredCampers} />
      </main>
    </div>
  );
};

export default Catalog;
