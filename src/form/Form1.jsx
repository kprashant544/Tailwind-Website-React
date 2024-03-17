import axios from "axios";
import { useForm } from "react-hook-form";

import { useEffect, useState } from "react";
import { API_URL1 } from "../config/EnvironmentVariables";

function Form1() {
  const [showdata, setShowData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  /* GET method */
  async function dataTable() {
    try {
      let xyz = await axios.get(`${API_URL1}/prisma`);
      console.log(xyz.data);
      setShowData(xyz.data);
    } catch (err) {
      window.alert(err.message);
      console.log(err.message);
    }
  }

  /* Post for the Table1 jsx file */
  async function finalSubmission(data) {
    try {
      console.log(data);
      const response = await axios({
        method: "post",
        url: "http://localhost:5001/prisma",
        data: data,
      });
      console.log(response.data);
      dataTable();
    } catch (err) {
      console.log(err.response.data);
    }
  }
  console.log(errors);

  /* Delete method */
  async function deleteRow(data) {
    try {
      console.log(data);
      const response = await axios({
        method: "delete",
        url: `http://localhost:5001/prisma/${data}`,
        data: data,
      });
      dataTable();
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  /* Put(Update) Method */
  async function updateRow(data) {
    try {
      console.log("update", data);
      const response = await axios({
        method: "put",
        url: `http://localhost:5001/prisma/update/${updateId}}`,
        data: { name: data.name, email: data.email },
      });
      dataTable();
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  /* Function to handle user selection */
  const handleSelect = (data) => {
    console.log(data);
    setIsUpdate(true);
    setUpdateId(data.id);
    setValue("name", data.name);
    setValue("email", data.email);
  };

  useEffect(() => {
    dataTable();
  }, []);
  return (
    <>
      <div className="flex justify-evenly mt-7 mb-6">
        <h1>Form Example</h1>
        <div className="form">
          <form
            className="w-full max-w-sm mx-auto"
            onSubmit={handleSubmit(isUpdate ? updateRow : finalSubmission)}
          >
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
            {!isUpdate ? (
              <button
                type="submit"
                className="w-full px-3 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={updateRow}
                className="w-full px-3 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Update
              </button>
            )}
          </form>
        </div>
        <div className="overflow-x-auto">
          <table className="border-collapse border border-gray-400 min-w-full ">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">Id</th>
                <th className="border border-gray-400 px-4 py-2">Name</th>
                <th className="border border-gray-400 px-4 py-2">Email</th>
                <th className="border border-gray-400 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {showdata.map((value, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 px-4 py-2 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {value.name}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {value.email}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    <div className=" flex gap-1">
                      <button
                        onClick={() => handleSelect(value)}
                        className="bg-[#3330ff] rounded-md px-1 text-white"
                      >
                        Select {value.id}
                      </button>
                      <button
                        onClick={() => deleteRow(value.id)}
                        className="bg-[#ff5630] rounded-md px-1 text-white"
                      >
                        Delete {value.id}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Form1;
