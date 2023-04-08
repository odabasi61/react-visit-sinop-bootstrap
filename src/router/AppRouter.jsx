import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes></Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
