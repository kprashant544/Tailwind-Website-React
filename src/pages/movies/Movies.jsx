import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../config/EnvironmentVariables";

function Movies() {
  const [data, setData] = useState("");
  const [friday, setFriday] = useState("");

  // let myPromise = new Promise(function (myresolve, myreject) {
  //   let value = 1;
  //   if (value == 1) {
  //     myresolve("error solved");
  //   } else {
  //     myreject("error occured");
  //   }
  // });
  // myPromise.then(
  //   function (value) {
  //     console.log(value);
  //   },
  //   function (err) {
  //     console.log(err);
  //   }
  // );

  // async function test() {
  //   let a = await fetch("https://dog.ceo/api/breeds/image/random").then((res) =>
  //     res.json()
  //   );
  //   console.log(a);
  //   setData(a);
  // }

  async function test() {
    try {
      let data = await axios.get(`${API_URL}/msg`);
      console.log(data.data);
      setData(data.data);
    } catch (err) {
      window.alert(err.message);
      console.log(err.message);
    }
  }
  console.log(data);

  async function test1() {
    try {
      let abc = await axios.get(`${API_URL}/heavy`);
      console.log(abc.data);
      setFriday(abc.data);
    } catch (err) {
      window.alert(err.message);
      console.log(err.message);
    }
  }

  useEffect(() => {
    test();
    test1();
    console.log("This is my render");
  }, []);

  return (
    <>
      <button
        className="bg-red-700 w-[5%] rounded-md  ml-8 text-white"
        onClick={test}
      >
        Click Me
      </button>

      <div className="flex mt-5">{data.name}</div>

      <button
        className="bg-red-700 w-[5%] rounded-md  ml-8 text-white"
        onClick={test1}
      >
        Click Me
      </button>

      <div className="flex mt-5">
        <iframe src={friday.video}></iframe>
      </div>
    </>
  );
}

export default Movies;
