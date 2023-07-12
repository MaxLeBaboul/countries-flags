import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Logo />
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
