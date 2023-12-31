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
import Tiktok from "./views/Services/quang-cao/Tiktok";
import Google from "./views/Services/quang-cao/Google";
import Youtube from "./views/Services/quang-cao/Youtube";
import Contact from "./views/Contact";
import WebDesign from "./views/Services/WebDesign";
import Editor from "./views/Services/Editor";
import Marketing from "./views/Services/Marketing";
import Brand from "./views/Services/Brand";
import Sourcing from "./views/Services/Sourcing";
import Learning from "./views/Services/Learning";
import MarketingOnline from "./views/Knowledge/MarketingOnline";

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
        <Route path="/dich-vu-ads/tiktok" element={<Tiktok />} />
        <Route path="/dich-vu-ads/google" element={<Google />} />
        <Route path="/dich-vu-ads/youtube" element={<Youtube />} />
        <Route path="/dich-vu-webdesign" element={<WebDesign />} />
        <Route path="/dich-vu-editor" element={<Editor />} />
        <Route path="/dich-vu-marketing-online" element={<Marketing />} />
        <Route path="/dich-vu-nhan-dien-thuong-hieu" element={<Brand />} />
        <Route path="/dich-vu-tim-nguon-hang" element={<Sourcing />} />
        <Route path="/dich-vu-khoa-hoc-ads" element={<Learning />} />
        <Route path="/kien-thuc" element={<Home />} />
        <Route
          path="/kien-thuc/marketing-online"
          element={<MarketingOnline />}
        />
        <Route path="/lien-he" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
