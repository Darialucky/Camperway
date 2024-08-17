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

  const handleToggleFavorite = async (camper) => {
    try {
      if (favoriteCampers.some((c) => c.id === camper.id)) {
        const favorite = favoriteCampers.find((f) => f.id === camper.id);
        await fetch(`/api/favorites/${favorite.id}`, { method: "DELETE" });
        setFavoriteCampers((prevFavorites) =>
          prevFavorites.filter((c) => c.id !== camper.id)
        );
      } else {
        await fetch("/api/favorites", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ camperId: camper.id }),
        });
        setFavoriteCampers((prevFavorites) => [...prevFavorites, camper]);
      }
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  };

  return (
    <div>
      <h1>Favorites</h1>
      <CamperList
        campers={favoriteCampers}
        onToggleFavorite={handleToggleFavorite}
        favoriteCampers={favoriteCampers}
      />
    </div>
  );
};

export default Favorites;
