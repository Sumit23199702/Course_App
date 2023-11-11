import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Mycourse from "./Components/Mycourse";
import About from "./Components/About";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Add from "./Components/Add";
// import PrivateRoute from "./PrivateRoute/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Mycourse />} path="/course" />
        <Route element={<Add />} path="/add" />
        <Route element={<About />} path="/about" />
        <Route element={<Login />} path="/login" />
        <Route element={<Signup />} path="/signup" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
