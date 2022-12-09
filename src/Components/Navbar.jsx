import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, setDarkTheme, setLightTheme } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;

  const changeTheme = () => {
    if (isDarkMode) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };
  return (
    <nav>
      <Link to="/home">Home</Link>

      <Link to="/contact">Contact</Link>

      <Link to="/favs">Favs</Link>

      <button
        className={`favButton${isDarkMode ? "light" : "dark"}`}
        onClick={changeTheme}
      >
        {isDarkMode ? "☀" : "🌙"}{" "}
      </button>
    </nav>
  );
};

export default Navbar;
