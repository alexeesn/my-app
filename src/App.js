import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Pets from "./pages/Pets";
import PetDetails from "./pages/PetDetails";
import About from "./pages/About";
import Adopt from "./pages/Adopt";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/pet-details/:petName" element={<PetDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;