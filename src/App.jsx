import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import NotFound from "./pages/404Page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logout from "./pages/Logout";
import Services from "./pages/Services";
import AdminLayout from "./components/AdminLayout";
import AdminUser from "./pages/AdminUser";
import AdminContact from "./pages/AdminContact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/about" element={<About />}>
          About
        </Route>
        <Route path="/services" element={<Services />}>
          Services
        </Route>
        <Route path="/register" element={<Register />}>
          Register
        </Route>
        <Route path="/contact" element={<Contact />}>
          Contact
        </Route>
        <Route path="/logout" element={<Logout />}>
          Logout
        </Route>
        <Route path="/login" element={<Login />}>
          Login
        </Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<AdminUser />}></Route>
          <Route path="contact" element={<AdminContact />}></Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
