import axios from "axios";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import useTheme from "../store/useTheme";
function Login() {
  const { color, bgColor, setColor, setDefault } = useTheme();
  console.log(color, bgColor);
  const cookie = Cookies.get("token");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  /* Post method for Login Page */
  async function loginPost(data) {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5001/auth/login1",
        data: { email: data.email, password: data.password },
      });
      console.log(response);
      Cookies.set("token", response.data.token, { path: "/" });
      navigate("/admin");
    } catch (err) {
      console.log(err.response.data);
    }
  }
  return (
    <>
      <button onClick={() => setColor("blue", "green")}> change color</button>
      <button onClick={setDefault}> default color</button>
      {!cookie ? (
        <div>
          <div className="flex justify-center mt-7 ml-[35rem] bg-[#a7c7a7] h-[350px] w-[25%] rounded-xl">
            <form onSubmit={handleSubmit(loginPost)}>
              <h2 className="font-bold text-[25px] flex justify-center">
                Login
              </h2>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                  })}
                />
                <div className="text-red-600">{errors?.email?.message}</div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  className="mt-9"
                  id="password"
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Please enter your password",
                  })}
                />
                <div className="text-red-600">{errors?.password?.message}</div>
              </div>
              <button
                type="submit"
                className="w-full px-3 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      ) : (
        <Navigate to="/admin" />
      )}
    </>
  );
}

export default Login;
