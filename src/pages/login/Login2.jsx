import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";

function Login2() {
  const cookie = Cookies.get("token");
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successmessage, setSuccessMessage] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/login",
        data: { username, password },
      });
      console.log(response);
      Cookies.set("token", response.data.token, { path: "/" });
      setError("");
      setSuccessMessage(response.data);
      navigate("/admin");
    } catch (err) {
      console.log(err.response.data);
      setSuccessMessage("");
      setError(err.response.data);
    }
  }
  return (
    <>
      {!cookie ? (
        <div>
          <form className="space-y-6" onSubmit={onSubmit}>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
              </div>
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      value={password}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  {error && <div className="text-red-500">{error}</div>}
                  {successmessage && (
                    <div className="text-green-500">{successmessage.msg}</div>
                  )}
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4"
                  >
                    Submit
                  </button>
                </div>
                <p className="mt-10 text-center text-sm text-gray-500">
                  Not a member?
                  <NavLink
                    to="/signup"
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    Click here to Sign Up
                  </NavLink>
                </p>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <Navigate to="/admin" />
      )}
    </>
  );
}

export default Login2;
