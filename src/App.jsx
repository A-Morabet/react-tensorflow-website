import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import FileInput from "./components/FileInput";
import "./index.css";

import ButtonGradient from "./assets/svg/ButtonGradient";

import Header from "./components/Header";

import Footer from "./components/Footer";

import Home from "./components/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Reset from "./auth/Reset";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
        <ToastContainer />
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="react-tensorflow-website/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/classifier" element={<FileInput />} />
          </Routes>
          <Footer />
        </div>
        <ButtonGradient />
    </>
  );
}

export default App;
