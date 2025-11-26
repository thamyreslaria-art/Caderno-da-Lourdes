import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Pagina2 from "./pages/Pagina2"; // <-- AQUI

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/pagina2" element={<Pagina2 />} /> {/* AQUI */}
      </Routes>
    </Router>
  );
}
