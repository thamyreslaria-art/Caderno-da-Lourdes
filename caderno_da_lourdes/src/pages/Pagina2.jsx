import React, { useState } from "react";
import "./receitas.css";
import "../components/Footer.css";
import "../components/Header.css";    // se tiver estilos compartilhados
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // mesmo logo que usa em Contato
import { Footer } from "../components/Footer";

export default function Pagina2() {
  const [paginaAtiva, setPaginaAtiva] = useState("Página 2");
  const [nome, setNome] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [preparo, setPreparo] = useState("");
  const [receitas, setReceitas] = useState([]);

  function adicionarReceita(e) {
    e.preventDefault();

    if (!nome || !ingredientes || !preparo) {
      alert("Preencha todos os campos!");
      return;
    }

    const novaReceita = {
      id: Date.now(),
      nome,
      ingredientes,
      preparo,
    };

    setReceitas([...receitas, novaReceita]);

    setNome("");
    setIngredientes("");
    setPreparo("");
  }

  return (
    <div className="home"> {/* mesma classe do Contato para herdar estilos do header */}
      {/* ===== HEADER IGUAL AO CONTATO ===== */}
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
          <div>
            <h1>Caderno da Lourdes</h1>
            <p>Receitas caseiras com amor</p>
          </div>
        </div>

        <nav>
          <ul>
            <li className={paginaAtiva === "Home" ? "active" : ""}>
              <Link to="/" onClick={() => setPaginaAtiva("Home")}>Home</Link>
            </li>
            <li className={paginaAtiva === "Página 2" ? "active" : ""}>
              {/* se você quer "/receitas", mude aqui para "/receitas" */}
              <Link to="/pagina2" onClick={() => setPaginaAtiva("Página 2")}>Receitas</Link>
            </li>
            <li className={paginaAtiva === "Contato" ? "active" : ""}>
              <Link to="/contato" onClick={() => setPaginaAtiva("Contato")}>Contato</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* ===== CONTEÚDO PRINCIPAL - FORM E LISTA (igual estrutura do Contato) ===== */}
      <div className="receitas-page">
        <div className="receitas-container">
          <h1 className="titulo">📒 Adicionar Receita – Caderno da Lourdes</h1>

          <form className="form-receita" onSubmit={adicionarReceita}>
            <input
              type="text"
              placeholder="Nome da receita"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <textarea
              placeholder="Ingredientes (um por linha)"
              value={ingredientes}
              onChange={(e) => setIngredientes(e.target.value)}
              rows={4}
              required
            />

            <textarea
              placeholder="Modo de preparo"
              value={preparo}
              onChange={(e) => setPreparo(e.target.value)}
              rows={4}
              required
            />

            <button type="submit">➕ Adicionar Receita</button>
          </form>

          <div className="lista-receitas">
            <h2>📚 Receitas Adicionadas</h2>
            {receitas.length === 0 && <p>Nenhuma receita adicionada ainda.</p>}

            {receitas.map((r) => (
              <div key={r.id} className="card-receita">
                <h3>{r.nome}</h3>
                <p><strong>Ingredientes:</strong></p>
                <ul>
                  {r.ingredientes.split("\n").map((i, index) => (
                    <li key={index}>{i}</li>
                  ))}
                </ul>
                <p><strong>Modo de preparo:</strong><br />{r.preparo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
