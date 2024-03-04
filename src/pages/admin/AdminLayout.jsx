import { NavLink, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Admin Panel</h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </header>

        {/* Main Content */}
        <main className="flex flex-grow p-4">
          {/* Left Sidebar */}
          <aside className="w-64 bg-white shadow-md p-4">
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
          </aside>

          {/* Main Content Area */}
          <section className="flex-grow p-4">
            <h2 className="text-lg font-bold mb-4">Welcome, Admin!</h2>
            <Outlet />
            {/* Add your content here, like charts, tables, forms, etc. */}
          </section>
        </main>
      </div>
    </>
  );
}

export default AdminLayout;
