import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Historia } from "./components/Historia";
import { Valores } from "./components/Valores";
import { Missao } from "./components/Missao";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Historia />
        <Valores />
        <Missao />
      </main>
      <Footer />
    </div>
  );
}
