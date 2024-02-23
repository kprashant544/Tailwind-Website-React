import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function HomeLayout() {
  return (
    <>
      <div>
        <NavBar />

        <Outlet />
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomeLayout;
