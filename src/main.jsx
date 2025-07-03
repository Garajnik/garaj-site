import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import "./i18.js";
import HomePage from "./pages/home/HomePage.jsx";
import PortfolioPage from "./pages/portfolio/PortfolioPage.jsx";
import BlogPage from "./pages/blog/BlogPage.jsx";
import WorksPage from "./pages/works/WorksPage.jsx";
import ContactsPage from "./pages/contacts/ContactsPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="works" element={<WorksPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
