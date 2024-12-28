import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import React, { useState, useEffect } from "react";


const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
  
    useEffect(() => {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(storedFavorites);
    }, []);
  
    // Handle removing from favorites
    const handleRemoveFavorite = (cardToRemove) => {
      const updatedFavorites = favorites.filter((card) => card.id !== cardToRemove.id);
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };
  
    return (
      <div>
        <h1>Favorites</h1>
        <div className="favorites">
          {favorites.length > 0 ? (
            favorites.map((card) => (
               

              <div style={{ width: "400px" }} className="card pb-5 pt-4">
                <p className="text-center fs-3 text-warning">{card.tittle}</p>
                <p className="card-text text-center  fw-normal">{card.text}</p>
                
                <FontAwesomeIcon onClick={() => handleRemoveFavorite(card)} icon={faHeart}/>

              </div>
            ))
          ) : (
            <p>No favorites yet!</p>
          )}
        </div>
      </div>
    );
  };
  
  export default Favorites;