import React, { useState } from "react";
import "./Contato.css";
import "../components/Footer.css";
import "../components/Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Contato() {
  const [paginaAtiva, setPaginaAtiva] = useState("Contato");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensagem enviada!\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
    setNome("");
    setEmail("");
    setMensagem("");
  };

  return (
    <div className="home">
      {/* ===== HEADER ===== */}
      <header className="header">
        <div className="logo">
          
          {/* 👉 AQUI COLOQUEI A IMAGEM DA LOGO */}
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
              <Link to="/pagina2" onClick={() => setPaginaAtiva("Página 2")}>Receitas</Link>
            </li>
            <li className={paginaAtiva === "Contato" ? "active" : ""}>
              <Link to="/contato" onClick={() => setPaginaAtiva("Contato")}>Contato</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* ===== CONTEÚDO ===== */}
      <div className="contato-page">
        <section className="informacoes-contato">
          <div className="meios-contato">
            <h3>Meios de Contato</h3>
            <ul>
              <li><strong>E-mail:</strong> contato@cadernodalourdes.com</li>
              <li><strong>Telefone/WhatsApp:</strong> (01) 98897-1366</li>
              <li><strong>Endereço:</strong> Rua57 leste,6,Paris,França</li>
            </ul>
          </div>

          <div className="redes-sociais">
            <h3>Redes Sociais</h3>
            <ul>
              <li><a href="#" target="_blank">Instagram</a></li>
              <li><a href="#" target="_blank">Facebook</a></li>
              <li><a href="#" target="_blank">LinkedIn</a></li>
            </ul>
          </div>
        </section>

        {/* ===== FORMULÁRIO ===== */}
        <form onSubmit={handleSubmit} className="form-contato">
          <h2>Entre em Contato</h2>

          <label>
            Nome
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome completo"
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
            />
          </label>

          <label>
            Mensagem
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Conte-nos o que você pensa..."
              required
            ></textarea>
          </label>

          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <h3><strong>Caderno da Lourdes - Receitas Caseiras com Amor</strong></h3>
        <p>Compartilhe estas receitas com quem você ama</p>
      </footer>
    </div>
  );
}
