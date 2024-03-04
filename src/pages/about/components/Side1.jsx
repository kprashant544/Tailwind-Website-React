import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Side1() {
  const params = useParams();
  console.log(params.id);
  const [data, setData] = useState("");
  async function dynamicAbout() {
    try {
      const response = await axios({
        method: "get",
        url: `http://localhost:5000/about/${params.id}`,
      });
      console.log(response.data);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    dynamicAbout();
  }, []);

  return (
    <>
      <div>Side1</div>
    </>
  );
}

export default Side1;
