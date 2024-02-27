import { useState } from "react";

function Login() {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [gender, setGender] = useState("");
  //   const [country, setCountry] = useState("");
  //   const [bike, setBike] = useState("");
  //   const [nameError, setNameError] = useState("");
  //   const [emailError, setEmailError] = useState("");
  //   const [genderError, setGenderError] = useState("");
  //   const [countryError, setCountryError] = useState("");
  //   const [bikeError, setBikeError] = useState("");

  const [FormData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    country: "",
    bike: "",
  });
  const [formError, setFormError] = useState({
    nameError: "",
    genderError: "",
    emailError: "",
    countryError: "",
    bikeError: "",
  });

  function onClick(e) {
    e.preventDefault;
    setFormError({
      nameError: "",
      genderError: "",
      emailError: "",
      countryError: "",
      bikeError: "",
    });

    if (!FormData.name) {
      setFormError((state) => {
        return { ...state, nameError: "It's a Name  Error" };
      });
    }
    if (!FormData.gender) {
      setFormError((state) => {
        return { ...state, genderError: " Hey select one of the above gender" };
      });
    }
    if (!FormData.email) {
      setFormError((state) => {
        return { ...state, emailError: " Enter valid email" };
      });
    }
    if (!FormData.country) {
      setFormError((state) => {
        return { ...state, countryError: " Please select a country" };
      });
    }
    if (!FormData.bike) {
      setFormError((state) => {
        return { ...state, bikeError: " Want a ride? Choose any one" };
      });
    }
  }

  console.log(FormData);
  return (
    <div className=" flex flex-col justify-center items-center mt-[-15px]">
      <div className="text-[larger] text-[rgb(97,12,12)] text-center p-[15px]">
        <h1>Wanna ride your dream?</h1>
        <h4>
          <b>Fill the form below:</b>
        </h4>
      </div>
      <div className="form">
        <form className="bg-[rgb(205,206,196)] -mt-2.5 p-[50px]">
          <label className="text-black">
            Name:
            <input
              type="text"
              placeholder="enter your name"
              onChange={(e) => {
                setFormData({ ...FormData, name: e.target.value });
              }}
              value={FormData.name}
            />
            <span className="text-[red] block">{formError.nameError}</span>
          </label>
          <label className="text-black">
            Email:
            <input
              type="text"
              placeholder="enter your email"
              onChange={(e) => {
                setFormData({ ...FormData, email: e.target.value });
              }}
              value={FormData.email}
            />
            <span className="text-[red] block">{formError.emailError}</span>
          </label>

          <div className="flex flex-col text-[larger] pb-[15px]">
            <label className="text-black">
              Gender:
              <input
                className="mt-5"
                type="radio"
                name="gender"
                value="male"
                onChange={(e) => {
                  setFormData({ ...FormData, gender: e.target.value });
                }}
              />
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={(e) => {
                  setFormData({ ...FormData, gender: e.target.value });
                }}
              />
              Female
            </label>
            <span className="text-[red] block">{formError.genderError}</span>

            <label className="text-black">
              Country:
              <select
                className="mt-3"
                onChange={(e) => {
                  setFormData({ ...FormData, country: e.target.value });
                }}
                value={FormData.country}
              >
                <option value="">Select...</option>
                <option value="nepal">Nepal</option>
                <option value="aus">Australia</option>
                <option value="china">China</option>
                <option value="others">Others</option>
              </select>
              <span className="text-[red] block">{formError.countryError}</span>
            </label>
            <label className="text-black mt-3">
              Bike to ride?
              <select
                onChange={(e) => {
                  setFormData({ ...FormData, bike: e.target.value });
                }}
                value={FormData.bike}
              >
                <option value="">select....</option>
                <option value="dirt">Dirt</option>
                <option value="motard">Motard</option>
                <option value="sports">Sports</option>
                <option value="naked">Naked</option>
              </select>
              <span className="text-[red] block">{formError.bikeError}</span>
            </label>
          </div>
          <button
            onClick={(e) => {
              onClick(e);
            }}
            className="bg-[#df1515] text-white cursor-pointer text-xl text-center mt-[9px] p-2.5 rounded-[17px] border-[none] hover:text-black hover:bg-[#ac1a1a]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

//   async function posted(e) {
//     e.preventdefault();
//     try {
//       const data = await axios({
//         method: "post",
//         url: "http://localhost:5000/posted",
//       });
//       console.log(data);
//     } catch (err) {
//       console.log(err);
