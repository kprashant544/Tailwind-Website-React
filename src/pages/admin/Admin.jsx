import Cookies from "js-cookie";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  function logout() {
    Cookies.remove("token", { path: "/" });
    navigate("/login");
  }
  return (
    <>
      <div className="main">
        <div className="shadow-md flex justify-between p-4 border-2 border-sky-500 items-center">
          <h1 className=" font-bold text-xl">Admin Panel</h1>
          <div className="shadow-md ">
            <input type="text" placeholder="Search .." />
          </div>

          <button
            onClick={logout}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
        <div></div>
        {/* Main Content */}
        <main className="flex flex-grow p-4">
          {/* Left Sidebar */}
          <div className="w-64 bg-white shadow-md p-4">
            <h2 className="text-lg font-bold mb-4">Navigation</h2>
            <ul className="space-y-2">
              <li className="hover:bg-gray-200 p-2 rounded">
                <NavLink to="Dashboard">Dashboard</NavLink>
              </li>
              <li className="hover:bg-gray-200 p-2 rounded">
                <NavLink to="users">Users</NavLink>
              </li>
              <li className="hover:bg-gray-200 p-2 rounded">
                <NavLink to="settings">Settings</NavLink>
              </li>
            </ul>
          </div>

          {/* Main Content Area */}
          <section className="flex-grow p-4">
            <h2 className="text-lg font-bold mb-4">Welcome, Admin!</h2>
            <Outlet />
            {/* Add your content here, like charts, tables, forms, etc. */}
          </section>
        </main>
        <div className="shadow-md flex justify-between p-4 border-2 border-sky-500 items-center bottom-0">
          <p>@copyright</p>
        </div>
      </div>
    </>
  );
}

export default Admin;
