import React, { useState } from "react";
import "./Contato.css"; // Importa o CSS específico da página de contato

export default function Contato() {
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
    <div className="contato-page">
      {/* Seção de informações de contato */}
      <section className="informacoes-contato">
        <div className="meios-contato">
          <h3>Meios de Contato</h3>
          <ul>
            <li><strong>E-mail:</strong> contato@cadernodalourdes.com</li>
            <li><strong>Telefone/WhatsApp:</strong> (11) 1234-5678</li>
            <li><strong>Endereço:</strong> Rua da Tradição, 123 - São Paulo, SP</li>
          </ul>
        </div>

        <div className="redes-sociais">
          <h3>Redes Sociais</h3>
          <ul>
            <li><a href="https://www.instagram.com/cadernodalourdes" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.facebook.com/cadernodalourdes" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.linkedin.com/company/cadernodalourdes" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </section>

      {/* Formulário de Contato */}
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
          />
        </label>
        <button type="submit">Enviar Mensagem</button>
      </form>
    </div>
  );
}
