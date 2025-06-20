import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import "./i18.js";
import Desktop from "./pages/Desktop.jsx";
import LoadingScreen from "./pages/LoadingScreen/LoadingScreen.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoadingScreen />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Desktop />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
