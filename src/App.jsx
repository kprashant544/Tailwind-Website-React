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
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login2 />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/admin" element={<Protected />}>
          <Route index element={<Admin />} />
          <Route path="dashboard" element={<AdminLayout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
