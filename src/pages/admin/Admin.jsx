import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  function logout() {
    Cookies.remove("token", { path: "/" });
    navigate("/login");
  }
  return (
    <>
      <div>
        <h2>Admin Page</h2>
        <button className="bg-red-600 text-white rounded-sm" onClick={logout}>
          Sign out
        </button>
      </div>
    </>
  );
}

export default Admin;
