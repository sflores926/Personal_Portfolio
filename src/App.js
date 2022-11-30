import React from "react";
import NavTabs from "./components/NavTabs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";


export default function App() {
  return (
      <BrowserRouter>
        <div>
          <NavTabs />
          <div className="">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}
