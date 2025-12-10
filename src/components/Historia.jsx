import React from "react";
import mesa from "../assets/mesa.jpg";
import "./Historia.css";

export function Historia() {
  return (
    <section className="historia">
      <div className="historia-texto">
        <h2>A História do Caderno</h2>
        <p>
          O Caderno da Lourdes nasceu do desejo de preservar e compartilhar receitas
          que passaram de geração em geração, mantendo viva a tradição da culinária
          caseira brasileira.
        </p>
        <p>
          Cada receita aqui registrada carrega não apenas ingredientes e modo de
          preparo, mas também memórias, histórias e muito amor.
        </p>
      </div>
      <img src={mesa} alt="Mesa posta" className="historia-imagem" />
    </section>
  );
}
