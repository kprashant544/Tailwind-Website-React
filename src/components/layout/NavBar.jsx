import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
// import GlobalContext from "../../GlobalContext";
// import { useContext } from "react";
import useTheme from "../../store/useTheme";

function NavBar() {
  // const contextValues = useContext(GlobalContext);
  // const { theme, setTheme } = contextValues;
  // const { color, backgroundcolor } = theme;
  const { setTheme, theme, setDefault1 } = useTheme();
  console.log(theme);

  // function onSelectTheme(e) {

  //   const value = e.target.value;
  //   console.log(theme);

  //   if (value === "theme1") {
  //     setTheme({ backgroundcolor: "red", color: "yellow" });
  //   } else if (value === "theme2") {
  //     setTheme({ backgroundcolor: "blue", color: "white" });
  //   } else if (value === "theme3") {
  //     setTheme({ backgroundcolor: "green", color: "white" });
  //   } else {
  //     setTheme({ backgroundcolor: "black", color: "white" });
  //   }
  // }

  //function for zustand(e)
  function onZustand(e) {
    const value = e.target.value;

    if (value === "lightblue") {
      setTheme({ color: "white", bgColor: "blue" });
    } else if (value === "lightgreen") {
      setTheme({ color: "white", bgColor: "green" });
    } else {
      setDefault1();
    }
  }

  return (
    <>
      <header
        style={{ backgroundColor: theme.bgColor, color: theme.color }}
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
          <div className="flex gap-2">
            <select onChange={onZustand} className="text-black mr-4">
              <option value="">default</option>
              <option value="lightblue">Light Blue</option>
              <option value="lightgreen">Light Green</option>
            </select>

            {/* <form className="text-black mr-4">
              <select onChange={onSelectTheme}>
                <option value=""></option>
                <option value="theme1">Theme1</option>
                <option value="theme2">Theme2</option>
                <option value="theme3">Theme3</option>
              </select>
            </form> */}
          </div>
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
          <NavLink to="/login1" className="mr-4 hover:text-gray-300 text-xl">
            LoginPage
          </NavLink>
          <NavLink to="/register" className="mr-4 hover:text-gray-300 text-xl">
            Register
          </NavLink>
        </div>
      </header>
    </>
  );
}

export default NavBar;
