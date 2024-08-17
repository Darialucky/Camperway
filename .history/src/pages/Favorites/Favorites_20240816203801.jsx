// src/pages/Favorites.jsx
import React, { useState, useEffect } from "react";
import CamperList from "../../components/CamperList/CamperList";

export const getFavorites = async () => {
  const response = await fetch("/api/favorites");
  const data = await response.json();
  return data;
};

export const isFavorite = (id, favorites) => {
  return favorites.some((favorite) => favorite.camperId === id);
};

export const addFavorite = async (id) => {
  await fetch("/api/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ camperId: id }),
  });
};

export const removeFavorite = async (id) => {
  await fetch(`/api/favorites/${id}`, { method: "DELETE" });
};

const Favorites = () => {
  const [favoriteCampers, setFavoriteCampers] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const data = await getFavorites();
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
        await removeFavorite(favorite.id);
        setFavoriteCampers((prevFavorites) =>
          prevFavorites.filter((c) => c.id !== camper.id)
        );
      } else {
        await addFavorite(camper.id);
        setFavoriteCampers((prevFavorites) => [
          ...prevFavorites,
          { camperId: camper.id },
        ]);
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
