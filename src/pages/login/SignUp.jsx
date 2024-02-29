import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successmessage, setSuccessMessage] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    if (password !== confirmpassword) {
      setError("Passwords does not match");
      return;
    }
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/signup",
        data: { username, password },
      });
      console.log(response);
      setError("");
      setSuccessMessage(response.data);
    } catch (err) {
      console.log(err.response.data);
      setSuccessMessage("");
      setError(err.response.data);
    }
  }
  return (
    <>
      <form className="space-y-6" onSubmit={onSubmit}>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign Up
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  name="username"
                  type="text"
                  value={username}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
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
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  name="password"
                  value={confirmpassword}
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
                Sign Up
              </button>
            </div>
            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?
              <NavLink
                to="/login"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Click Here
              </NavLink>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUp;
