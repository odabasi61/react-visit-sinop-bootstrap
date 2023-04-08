import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
import Accommodation from "../pages/Accommodation";
import Activities from "../pages/Activities";
import Food from "../pages/Food";
import Shopping from "../pages/Shopping";

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
