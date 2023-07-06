import React, { useEffect } from "react";
import "./App.scss";
import "./styles/breakpoint.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./views/About";
import AdsServices from "./views/Services/quang-cao/AdsServices";
import Facebook from "./views/Services/quang-cao/Facebook";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<About />} />
        <Route path="/dich-vu-ads" element={<AdsServices />} />
        <Route path="/dich-vu-ads/facebook" element={<Facebook />} />
        <Route path="/kien-thuc" element={<Home />} />
        <Route path="/lien-he" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
