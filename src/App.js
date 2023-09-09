import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Logo />
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
