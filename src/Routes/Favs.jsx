import React from "react";
import Card from "../Components/Card";
import { getFavStorage } from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const LocalFavs = getFavStorage();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid container">
        {LocalFavs.length
          ? LocalFavs.map((dentistFav) => (
              <Card {...dentistFav} key={dentistFav.id} />
            ))
          : null}
      </div>
    </>
  );
};

export default Favs;
