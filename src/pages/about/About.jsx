import { Outlet } from "react-router-dom";
import SideNav from "./components/SideNav";

function About() {
  return (
    <>
      <div className="flex">
        <SideNav />
        <div className="flex justify-center w-full bg-[rgb(240,255,200)] pt-2.5">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default About;
