import React, { useState } from "react";
import mesa from "../assets/mesa.jpg";
import avoENeta from "../assets/avo-e-neta.jpg";
import { Link } from "react-router-dom";

// Importando os estilos
import "../components/Header.css";
import "../components/Historia.css";
import "../components/Missao.css";
import "../components/Valores.css";
import "../components/Footer.css";
import logo from "../assets/logo.png";

export default function Home() {
  const [paginaAtiva, setPaginaAtiva] = useState("Home");


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
              <Link to="/Pagina2" onClick={() => setPaginaAtiva("Página2")}>Receitas</Link>
            </li>
            <li className={paginaAtiva === "Contato" ? "active" : ""}>
              <Link to="/contato" onClick={() => setPaginaAtiva("Contato")}>Contato</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* ===== CONTEÚDO PRINCIPAL ===== */}
      <main>
        {/* --- HISTÓRIA --- */}
        <section className="historia">
          <div className="historia-texto">
            <h2>A História do Caderno</h2>
            <p>
              O Caderno da Lourdes nasceu do desejo de preservar e compartilhar
              receitas que passaram de geração em geração, mantendo viva a
              tradição da culinária caseira brasileira.
            </p>
            <p>
              Cada receita aqui registrada carrega não apenas ingredientes e modo
              de preparo, mas também memórias, histórias e muito amor.
            </p>
          </div>
          <img src={mesa} alt="Mesa posta" className="historia-imagem" />
        </section>

        {/* --- VALORES --- */}
        <section className="valores">
          <h2>Nossos Valores</h2>
          <div className="valores-cards">
            <div className="card">
              <div className="icone">💛</div>
              <h3>Feito com Amor</h3>
              <p>Cada receita é testada e aprovada com carinho, como em casa de vó.</p>
            </div>
            <div className="card">
              <div className="icone">📖</div>
              <h3>Tradição</h3>
              <p>Preservamos receitas tradicionais, mantendo viva a história familiar.</p>
            </div>
            <div className="card">
              <div className="icone">🤝</div>
              <h3>Compartilhar</h3>
              <p>Acreditamos que cozinhar é um ato de amor e de união.</p>
            </div>
          </div>
        </section>

        {/* --- MISSÃO --- */}
        <section className="missao">
          <div className="missao-texto">
            <h2>Nossa Missão</h2>
            <p>
              Queremos inspirar pessoas a cozinharem em casa, resgatando o prazer
              de preparar refeições com ingredientes de qualidade e muito carinho.
            </p>
            <p>
              Acreditamos que a cozinha é o coração da casa, onde famílias se
              reúnem e memórias são criadas em torno da mesa.
            </p>
            <p>
              Cada receita compartilhada aqui é um convite para você fazer parte
              dessa tradição, criando suas próprias histórias e sabores.
            </p>
          </div>
          <img
            src={avoENeta}
            alt="Avó e neta cozinhando"
            className="missao-imagem"
          />
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <h3>
          <strong>Caderno da Lourdes - Receitas Caseiras com Amor</strong>
        </h3>
        <p>Compartilhe estas receitas com quem você ama</p>
      </footer>
    </div>
  );
}
