import { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import axios from "axios";
import { API_URL } from "../config/EnvironmentVariables";

function Example() {
  const [materialdata, setMaterialData] = useState("");
  async function matTable() {
    try {
      let abc = await axios.get(`${API_URL}/mattable`);
      console.log(abc.data);
      setMaterialData(abc.data);
    } catch (err) {
      window.alert(err.message);
      console.log(err.message);
    }
  }

  useEffect(() => {
    matTable();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstName", //access nested data with dot notation
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "address", //normal accessorKey
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "state",
        header: "State",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: materialdata, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return (
    <>
      <MaterialReactTable table={table} />
    </>
  );
}

export default Example;
