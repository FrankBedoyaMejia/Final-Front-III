import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const DetailCard = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(undefined);
  const { theme } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDentist(data);
      });
  }, [id]);
  return (
    <>
      <h1>Detalles del Dentista {dentist?.name} </h1>
      {dentist ? (
        <section>
          <div className="centrar">
            <div className={`card ${isDarkMode ? "dark" : "light"}`}>
              <div>
                <img src="/images/doctor.jpg" alt="doctor placeholder" />
              </div>
              <div>
                <ul>
                  <li>Name: {dentist.name}</li>
                  <li>Email: {dentist.email}</li>
                  <li>Phone: {dentist.phone}</li>
                  <li>Website: {dentist.website}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default DetailCard;
