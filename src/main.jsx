import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ResultPage from "./pages/result.jsx";
import Navbar from "./components/navbar.jsx";
import "./index.css";
import Detail from "./pages/detail.jsx";

const Root = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);

createRoot(document.getElementById("root")).render(<AppWrapper />);
