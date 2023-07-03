import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<Home />} />
        <Route path="/dich-vu" element={<Home />} />
        <Route path="/kien-thuc" element={<Home />} />
        <Route path="/lien-he" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
