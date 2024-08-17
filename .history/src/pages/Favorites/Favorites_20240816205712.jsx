import React, { useState, useEffect } from "react";
import CamperList from "../../components/CamperList/CamperList";

const Favorites = () => {
  const [favoriteCampers, setFavoriteCampers] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch("/api/favorites");
        const data = await response.json();
        setFavoriteCampers(data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div>
      <h1>Favorites</h1>
      <CamperList campers={favoriteCampers} />
    </div>
  );
};

export default Favorites;
