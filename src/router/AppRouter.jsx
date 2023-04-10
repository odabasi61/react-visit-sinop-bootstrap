import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
import Accommodation from "../pages/Accommodation";
import Activities from "../pages/Activities";
import Food from "../pages/Food";
import Shopping from "../pages/Shopping";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Privacy from "../pages/Privacy";
import Support from "../pages/Support";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="accommodation/" element={<Accommodation />} />
          <Route path="activities/" element={<Activities />} />
          <Route path="food/" element={<Food />} />
          <Route path="shopping/" element={<Shopping />} />
          <Route path="about/" element={<About />} />
          <Route path="contact/" element={<Contact />} />
          <Route path="privacy/" element={<Privacy />} />
          <Route path="support/" element={<Support />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
