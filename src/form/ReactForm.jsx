import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Spinner from "../components/layout/Spinner";
import { API_URL } from "../config/EnvironmentVariables";
function ReactForm() {
  const [loading, setLoading] = useState("");
  // const [successmessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* Post for the react hook form */
  async function finalSubmission(data) {
    try {
      console.log(data);
      // setSuccessMessage("");
      setLoading(true);
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/reacthookform",
        data: data,
      });
      console.log(response.data);
      setFormData(response.data);
      // setSuccessMessage(response.data);
    } catch (err) {
      console.log(err.response.data);
    } finally {
      setLoading(false);
    }
  }
  console.log(errors);

  async function tableData() {
    try {
      let abc = await axios.get(`${API_URL}/tableData`);
      console.log(abc.data);
    } catch (err) {
      window.alert(err.message);
      console.log(err.message);
    }
  }

  useEffect(() => {
    tableData();
  }, []);

  return (
    <>
      <div className=" bg-zinc-300 text-black flex flex-col ">
        <form
          className="w-full max-w-sm mx-auto"
          onSubmit={handleSubmit(finalSubmission)}
        >
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              {...register("name", {
                required: "name is required",
                maxLength: { message: "Cannot excced more than 15", value: 15 },
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
                pattern: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/i,
              })}
            />
            <div className="text-red-600">{errors?.password?.message}</div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Gender
              <select
                {...register("gender", { required: "Please select a gender" })}
              >
                <option value=""></option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
              </select>
            </label>
            <div className="text-red-600">{errors?.gender?.message}</div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Hobbies :
            </label>
            <span>
              {" Music"}
              <input
                className="hover:cursor-pointer"
                {...register("Hobbies", { required: "Select any one" })}
                type="radio"
                value="Music"
              />
            </span>
            <span>
              {" Sports"}
              <input
                className="hover:cursor-pointer"
                {...register("Hobbies")}
                type="radio"
                value="Sports"
              />
            </span>
            <span>
              {" Dancing"}
              <input
                className="hover:cursor-pointer"
                {...register("Hobbies")}
                type="radio"
                value="Dancing"
              />
            </span>
            <div className="text-red-600">{errors?.Hobbies?.message}</div>
          </div>
          <div className="mb-6">
            <div className="block text-sm font-medium text-gray-700">
              <label className="block text-sm">Message</label>

              <textarea
                {...register("message", {
                  required: "Please enter any message",
                })}
              />
            </div>
            <div className="text-red-600">{errors?.message?.message}</div>
          </div>
          <div className="mb-6">
            <input
              className="hover:cursor-pointer"
              type="checkbox"
              placeholder="Terms"
              {...register("Terms", {
                required: "Please check the box to proceed",
              })}
            />
            {"  Check to proceed"}
            <div className="text-red-600">{errors?.Terms?.message}</div>
          </div>
          <button
            disabled={loading}
            type="submit"
            className="w-full px-3 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <div className="flex gap-3"> Submit {loading && <Spinner />}</div>
          </button>
        </form>
        <div className="bg-slate-400 flex items-center">
          <h2 className="font-bold text-xl">Data from Backend:</h2>

          {Object.entries(formData).map(([key, value]) => (
            <p className=" flex p-2  justify-left " key={key}>
              <div>{key === "agree" ? "Agree to terms" : key}:</div>
              {typeof value === "boolean" ? (value ? "yes" : "no") : value}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default ReactForm;
