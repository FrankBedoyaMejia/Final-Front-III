import { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { data } = useContext(ContextGlobal);
  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {data.length
          ? data.map((dentist) => <Card {...dentist} key={dentist.id} />)
          : null}
      </div>
    </>
  );
};

export default Home;
