import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../config/EnvironmentVariables";

function Table() {
  const [showtable, setShowTable] = useState([]);
  async function tableData() {
    try {
      let abc = await axios.get(`${API_URL}/tableData`);
      console.log(abc.data);
      setShowTable(abc.data);
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
      <div className="flex justify-center text-[20px]">
        <table className="bg-[#99ae6c] text-white text-center">
          <thead className="head border border-slate-600 ...">
            <tr>
              <th>Name</th>
              <th>Roll</th>
              <th>Grade</th>
            </tr>
          </thead>
          {showtable.map((value, index) => (
            <tr key={index}>
              <td>{value.name}</td>
              <td>{value.roll}</td>
              <td>{value.grade}</td>
            </tr>
          ))}
        </table>
        <div className="2"></div>
      </div>
    </>
  );
}

export default Table;
