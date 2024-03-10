import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import GlobalContext from "../../GlobalContext";
import { useContext } from "react";

function NavBar() {
  const contextValues = useContext(GlobalContext);
  const { theme, setTheme } = contextValues;
  const { color, backgroundcolor } = theme;
  function onSelectTheme(e) {
    const value = e.target.value;
    console.log(theme);

    if (value === "theme1") {
      setTheme({ backgroundcolor: "red", color: "yellow" });
    } else if (value === "theme2") {
      setTheme({ backgroundcolor: "blue", color: "white" });
    } else if (value === "theme3") {
      setTheme({ backgroundcolor: "green", color: "white" });
    } else {
      setTheme({ backgroundcolor: "black", color: "white" });
    }
  }
  return (
    <>
      <header
        style={{ backgroundColor: backgroundcolor, color: color }}
        className="text-white body-font bg-black"
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-2xl text-white">StreamLab</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <NavLink to="/" className="mr-5 hover:text-gray-300 text-xl">
              Home
            </NavLink>
            <NavLink to="/about" className="mr-5 hover:text-gray-300 text-xl">
              About
            </NavLink>
            <NavLink to="/movies" className="mr-5 hover:text-gray-300 text-xl">
              Movies
            </NavLink>
            <NavLink to="/series" className="mr-5 hover:text-gray-300 text-xl">
              Series
            </NavLink>
            <NavLink to="/pricing" className="mr-5 hover:text-gray-300 text-xl">
              Pricing
            </NavLink>
            <NavLink to="/contact" className="mr-5 hover:text-gray-300 text-xl">
              Contact
            </NavLink>
          </nav>
          <form className="text-black mr-4">
            <select onChange={onSelectTheme}>
              <option value=""></option>
              <option value="theme1">Theme1</option>
              <option value="theme2">Theme2</option>
              <option value="theme3">Theme3</option>
            </select>
          </form>
          <FiSearch className="text-xl"></FiSearch>
          <NavLink
            to="/login"
            className="ml-6 mr-6 hover:text-gray-300 text-xl"
          >
            Login
          </NavLink>
          <NavLink to="/signup" className="mr-4 hover:text-gray-300 text-xl">
            Sign Up
          </NavLink>
        </div>
      </header>
    </>
  );
}

export default NavBar;
