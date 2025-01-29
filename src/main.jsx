import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import Welcome from "./pages/Welcome.jsx";
import Resume from "./pages/Resume.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Portfolio from "./pages/Portfolio.jsx";
import "./index.css";
import "./i18.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
