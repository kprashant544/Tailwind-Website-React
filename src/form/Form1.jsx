import axios from "axios";
import { useForm } from "react-hook-form";

function Form1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
    } catch (err) {
      console.log(err.response.data);
    }
  }
  console.log(errors);
  return (
    <>
      <div className="flex justify-center">
        <h1>Form Example</h1>
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
          <button
            type="submit"
            className="w-full px-3 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form1;
