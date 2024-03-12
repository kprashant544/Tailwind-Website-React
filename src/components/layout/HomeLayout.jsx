import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function HomeLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />

        <Outlet />
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomeLayout;
