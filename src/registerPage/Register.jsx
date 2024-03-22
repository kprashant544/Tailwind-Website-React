import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { API_URL1 } from "../config/EnvironmentVariables";
import axios from "axios";

// import { useNavigate } from "react-router-dom";

function Register() {
  // const navigate = useNavigate();
  const [registerdata, setRegisterData] = useState([]);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5001/auth/register",
        data: { name: data.name, email: data.email, password: data.password },
      });
      console.log(response.data);
      registerTable();

      // navigate("/login1");
    } catch (err) {
      console.log(err.response.data);
    }
  }

  /* GET method */
  async function registerTable() {
    try {
      let xyz = await axios.get(`${API_URL1}/auth/prisma`);
      console.log(xyz.data);
      setRegisterData(xyz.data);
    } catch (err) {
      window.alert(err.message);
      console.log(err.message);
    }
  }

  useEffect(() => {
    registerTable();
  }, []);

  return (
    <>
      <div className="flex gap-3">
        <div className="flex justify-center mt-[15px] ml-[35rem] bg-[#a7c7a7] h-[420px] w-[30%] rounded-xl">
          <form
            className="w-full max-w-sm mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="font-bold text-[25px] flex justify-center">
              Register
            </h2>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                {...register("name", {
                  required: "name is required",
                  maxLength: {
                    message: "Cannot excced more than 15",
                    value: 15,
                  },
                  minLength: {
                    message: "length should be atleast of 3",
                    value: 3,
                  },
                })}
                type="text"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <div className="text-red-600">{errors?.name?.message}</div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
                type="password"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
              Register
            </button>
          </form>
        </div>
        <div className="overflow-x-auto">
          <table className="border-collapse border border-gray-400 min-w-10 ml-[10px] mt-5">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">Id</th>
                <th className="border border-gray-400 px-4 py-2">Name</th>
                <th className="border border-gray-400 px-4 py-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {registerdata.map((value, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 px-4 py-2 whitespace-nowrap">
                    {index}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {value.name}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {value.email}
                  </td>
                  <td className="border border-gray-400 px-4 py-2"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Register;
