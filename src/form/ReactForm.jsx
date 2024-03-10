import { useForm } from "react-hook-form";
function ReactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function finalSubmission(data) {
    console.log(data);
  }
  console.log(errors);
  return (
    <>
      <div className=" bg-zinc-300 text-white ">
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

export default ReactForm;
