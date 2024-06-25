import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Mainpage from "./Main/Mainpage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainBio from "./Bio/MainBio.jsx";
import MainGallery from "./Gallery/MainGallery.jsx";
import MerchMain from "./Merch/MerchMain.jsx";
import PrelandMain from "./PreLand/PrelandMain.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/bluzhalter" element={<PrelandMain/>} />
      <Route path="/bluzhalter/bio" element={<MainBio/>} />
      <Route path="/bluzhalter/gallery" element={<MainGallery/>} />
      <Route path="/bluzhalter/merch" element={<MerchMain/>} />
      <Route path="/bluzhalter/main" element={<Mainpage/>} />
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
