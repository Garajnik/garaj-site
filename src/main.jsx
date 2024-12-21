import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header.jsx";
import Welcome from "./pages/Welcome.jsx";
import Blog from "./pages/Blog.jsx";
import Resume from "./pages/Resume.jsx";
import Contacts from "./pages/Contacts.jsx";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
