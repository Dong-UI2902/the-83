import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./components/Navbar/Navbar";

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
    </div>
  );
}

export default App;
