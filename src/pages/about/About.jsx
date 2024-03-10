import { useContext } from "react";
import SideNav from "./components/SideNav";
import GlobalContext from "../../GlobalContext";

// eslint-disable-next-line react/prop-types
function About({ children }) {
  const contextValues = useContext(GlobalContext);
  console.log(contextValues);
  return (
    <>
      <div className="flex">
        <SideNav />
        <div className="flex justify-center w-full bg-[rgb(240,255,200)] pt-2.5">
          {children ? children : <div>About page</div>}
        </div>
      </div>
    </>
  );
}

export default About;
