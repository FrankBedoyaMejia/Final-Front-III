import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

export const getFavStorage = () => {
  const localData = localStorage.getItem("favs");
  return localData ? JSON.parse(localData) : [];
};

const setFavStorage = (dentist) => {
  const storageFavs = getFavStorage();
  const isFavOnList = storageFavs.filter((fav) => {
    return fav.id === dentist.id;
  });
  if (isFavOnList.length === 0) {
    storageFavs.push(dentist);
    localStorage.setItem("favs", JSON.stringify(storageFavs));
    alert("Dentista agragado exitosamente");
  } else {
    alert("Dentista ya esta en favs");
  }
};

const removeFavStorage = (id) => {
  const storageFavs = getFavStorage();
  const index = storageFavs.findIndex((fav) => fav.id === id);
  if (index !== -1) {
    storageFavs.splice(index, 1);
    localStorage.setItem("favs", JSON.stringify(storageFavs));
    alert("Dentista eliminado exitosamente");
  } else {
    alert("Error");
  }
};

const isFavorited = (id) => {
  const LocalData = getFavStorage();
  const isFavOnList = LocalData.filter((fav) => {
    return fav.id === id;
  });
  return isFavOnList.length === 1;
};

const Card = ({ name, username, id }) => {
  const { theme } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    setFavStorage({ name, username, id });
  };

  const removeFav = () => {
    removeFavStorage(id);
  };

  const favorite = isFavorited(id);

  return (
    <div className={`card ${isDarkMode ? "dark" : "light"}`}>
      <img src="/images/doctor.jpg" alt="doctor placeholder" />
      <Link to={`/dentist/${id}`}>
        <h5>{name}</h5>
      </Link>
      <p>{username}</p>
      <button
        onClick={favorite ? removeFav : addFav}
        className={`${isDarkMode ? "dark" : "light"}`}
      >
        {favorite ? "❌ Eliminar Doctor Favorito" : "⭐ Añadir Doctor favorito"}
      </button>
    </div>
  );
};

export default Card;
