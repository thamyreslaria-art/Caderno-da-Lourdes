import React from "react";
import avoENeta from "../assets/avo-e-neta.jpg";
import "./Missao.css";

export function Missao() {
  return (
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
      <img src={avoENeta} alt="Avó e neta cozinhando" className="missao-imagem" />
    </section>
  );
}
