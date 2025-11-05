import React from "react";
import "./Valores.css";

export function Valores() {
  return (
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
  );
}
