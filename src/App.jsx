import { Routes, Route } from "react-router-dom";
import HomeLayout from "./components/layout/HomeLayout";
// import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import ErrorPage from "./components/layout/ErrorPage";
import Pricing from "./pages/pricing/Pricing";
import Movies from "./pages/movies/Movies";
import Series from "./pages/series/Series";
import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
import Login2 from "./pages/login/Login2";
import SignUp from "./pages/login/SignUp";
import Admin from "./pages/admin/Admin";
import Protected from "./components/layout/Protected";
import AdminLayout from "./pages/admin/AdminLayout";
import Users from "./pages/admin/Users";
import Settings from "./pages/admin/Settings";
import DashBoard from "./pages/admin/DashBoard";
import Dynamic from "./pages/dynamic/Dynamic";
import About from "./pages/about/About";
import Side1 from "./pages/about/components/Side1";
import GlobalContext from "./GlobalContext.jsx";
import { useState } from "react";
import ReactForm from "./form/ReactForm.jsx";
import Table from "./table/Table.jsx";
import MatReactTable from "./table/MatReactTable.jsx";
import Form1 from "./form/Form1.jsx";

function App() {
  const [theme, setTheme] = useState({
    color: "white",
    backgroundColor: "black",
  });
  return (
    <>
      <GlobalContext.Provider value={{ theme, setTheme }}>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route
              path="/about/:id"
              element={
                <About>
                  <Side1 />
                </About>
              }
            />

            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/products/:id" element={<Dynamic />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login2 />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/reactform" element={<ReactForm />} />
            <Route path="/table" element={<Table />} />
            <Route path="/table0" element={<MatReactTable />} />
            <Route path="/form1" element={<Form1 />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />

          {/* Route for the sign in and sign up */}
          <Route path="/admin" element={<Protected />}>
            <Route index element={<Admin />} />
            <Route path="dashboard" element={<AdminLayout />}>
              <Route path="Dashboard" element={<DashBoard />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
        </Routes>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
