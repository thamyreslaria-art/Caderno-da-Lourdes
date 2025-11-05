import React, { useState } from "react";
import "./Header.css";

export function Header() {
  const [paginaAtiva, setPaginaAtiva] = useState("Home");

  return (
    <header className="header">
      <div className="logo">
        <span className="icon">🍲</span>
        <div>
          <h1>Caderno da Lourdes</h1>
          <p>Receitas caseiras com amor</p>
        </div>
      </div>

      <nav>
        <ul>
          <li
            className={paginaAtiva === "Home" ? "active" : ""}
            onClick={() => setPaginaAtiva("Home")}
          >
            Home
          </li>
          <li
            className={paginaAtiva === "Página 2" ? "active" : ""}
            onClick={() => setPaginaAtiva("Página 2")}
          >
            Página 2
          </li>
          <li
            className={paginaAtiva === "Contato" ? "active" : ""}
            onClick={() => setPaginaAtiva("Contato")}
          >
            Contato
          </li>
        </ul>
      </nav>
    </header>
  );
}
