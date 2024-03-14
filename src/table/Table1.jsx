import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL1 } from "../config/EnvironmentVariables";
import Form1 from "../form/Form1";

function Table1() {
  const [showdata, setShowData] = useState([]);
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

  useEffect(() => {
    dataTable();
  }, []);

  return (
    <>
      <div className="">
        <div className="">
          <table className="border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">Id</th>
                <th className="border border-gray-400 px-4 py-2">Name</th>
                <th className="border border-gray-400 px-4 py-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {showdata.map((value, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 px-4 py-2">
                    {value.id}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {value.name}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {value.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Form1 />
        </div>
      </div>
    </>
  );
}

export default Table1;
