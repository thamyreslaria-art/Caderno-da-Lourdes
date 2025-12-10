import React, { useState } from "react";
import "./receitas.css";
import "../components/Footer.css";
import "../components/Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Footer } from "../components/Footer";

export default function Pagina2() {
  const [paginaAtiva, setPaginaAtiva] = useState("Página 2");
  const [receitaAberta, setReceitaAberta] = useState(null);

  const receitas = [
    {
      id: 1,
      nome: "Bolo de Cenoura",
      ingredientes: `2 cenouras médias
1 xícara de óleo
2 ovos
2 xícaras de açúcar
2 xícaras de farinha de trigo
1 colher de sopa de fermento em pó`,
      preparo: `1. Preaqueça o forno a 180°C.
2. Bata cenoura, ovos e óleo.
3. Misture com açúcar, farinha e fermento.
4. Despeje em forma untada e asse por 40 min.`,
      imagem: "https://i.imgur.com/ZpYcT2A.jpeg"
    },
    {
      id: 2,
      nome: "Macarrão à Bolonhesa",
      ingredientes: `500g de macarrão
500g de carne moída
1 cebola picada
2 dentes de alho
2 tomates picados
Sal e pimenta`,
      preparo: `1. Cozinhe o macarrão.
2. Refogue cebola e alho.
3. Adicione carne.
4. Junte tomates e tempere.
5. Misture no macarrão.`,
      imagem: "https://i.imgur.com/6wJzJHW.jpeg"
    },
    {
      id: 3,
      nome: "Pão de Queijo",
      ingredientes: `500g polvilho doce
300g queijo ralado
1 xícara leite
1/2 xícara óleo
1 ovo
Sal`,
      preparo: `1. Misture tudo.
2. Modele bolinhas.
3. Asse por 20 min.`,
      imagem: "https://i.imgur.com/Lcxxifp.jpeg"
    },
    {
      id: 4,
      nome: "Brigadeiro",
      ingredientes: `1 lata de leite condensado
2 colheres de sopa de chocolate em pó
1 colher de sopa de manteiga
Chocolate granulado`,
      preparo: `1. Misture leite condensado, chocolate e manteiga.
2. Cozinhe até desgrudar do fundo.
3. Faça bolinhas e passe no granulado.`,
      imagem: "https://i.imgur.com/YkCqF6A.jpeg"
    },
    {
      id: 5,
      nome: "Beijinho",
      ingredientes: `1 lata de leite condensado
100g de coco ralado
1 colher de sopa de manteiga
Coco ralado para enrolar`,
      preparo: `1. Misture leite condensado, coco e manteiga.
2. Cozinhe até engrossar.
3. Modele bolinhas e passe no coco.`,
      imagem: "https://i.imgur.com/2fL1L2Q.jpeg"
    },
    {
      id: 6,
      nome: "Torta de Maçã",
      ingredientes: `3 maçãs
2 xícaras de farinha
1 xícara de açúcar
2 ovos
1/2 xícara de óleo
1 colher de chá de canela`,
      preparo: `1. Bata ovos, açúcar e óleo.
2. Misture farinha e canela.
3. Acrescente maçãs picadas.
4. Asse por 40 min.`,
      imagem: "https://i.imgur.com/VlK9kUe.jpeg"
    },
    {
      id: 7,
      nome: "Panqueca",
      ingredientes: `1 xícara de farinha
1 ovo
1 xícara de leite
Sal a gosto`,
      preparo: `1. Misture todos os ingredientes.
2. Cozinhe em frigideira untada.
3. Recheie a gosto.`,
      imagem: "https://i.imgur.com/5tFvI3G.jpeg"
    },
    {
      id: 8,
      nome: "Omelete",
      ingredientes: `2 ovos
Sal e pimenta
Recheio a gosto`,
      preparo: `1. Bata ovos com sal e pimenta.
2. Cozinhe em frigideira.
3. Acrescente recheio.`,
      imagem: "https://i.imgur.com/hf4xMZt.jpeg"
    },
    {
      id: 9,
      nome: "Bolo de Chocolate",
      ingredientes: `2 xícaras de açúcar
2 xícaras de farinha
1 xícara de chocolate em pó
3 ovos
1 xícara de leite`,
      preparo: `1. Misture todos os ingredientes.
2. Asse em forno 180°C por 35 min.`,
      imagem: "https://i.imgur.com/NvM0P7j.jpeg"
    },
    {
      id: 10,
      nome: "Mousse de Maracujá",
      ingredientes: `1 lata de leite condensado
1 lata de creme de leite
1 lata de suco de maracujá`,
      preparo: `1. Bata todos os ingredientes no liquidificador.
2. Leve à geladeira por 2h.`,
      imagem: "https://i.imgur.com/9G2hL6O.jpeg"
    },
    {
      id: 11,
      nome: "Coxinha",
      ingredientes: `1 kg de frango desfiado
2 xícaras de farinha de trigo
1 litro de caldo de frango
Sal a gosto`,
      preparo: `1. Cozinhe frango e desfie.
2. Faça massa com farinha e caldo.
3. Modele e frite.`,
      imagem: "https://i.imgur.com/VlK9kUe.jpeg"
    },
    {
      id: 12,
      nome: "Escondidinho de Carne",
      ingredientes: `500g carne moída
500g mandioca
1/2 xícara de leite
Queijo ralado`,
      preparo: `1. Cozinhe e amasse a mandioca.
2. Refogue a carne.
3. Monte camadas e asse com queijo.`,
      imagem: "https://i.imgur.com/5tFvI3G.jpeg"
    },
    {
      id: 13,
      nome: "Quiche de Alho-Poró",
      ingredientes: `Massa pronta
2 ovos
1 xícara de creme de leite
Alho-poró picado
Sal e pimenta`,
      preparo: `1. Bata ovos e creme.
2. Misture alho-poró.
3. Asse por 30 min.`,
      imagem: "https://i.imgur.com/hf4xMZt.jpeg"
    },
    {
      id: 14,
      nome: "Salada Caprese",
      ingredientes: `Tomate
Mussarela de búfala
Manjericão
Azeite e sal`,
      preparo: `1. Corte tomate e mussarela.
2. Intercale.
3. Tempere com azeite, sal e manjericão.`,
      imagem: "https://i.imgur.com/NvM0P7j.jpeg"
    },
    {
      id: 15,
      nome: "Risoto de Frango",
      ingredientes: `1 xícara de arroz
200g frango
Caldo de galinha
Queijo parmesão`,
      preparo: `1. Refogue arroz e frango.
2. Acrescente caldo aos poucos.
3. Finalize com parmesão.`,
      imagem: "https://i.imgur.com/9G2hL6O.jpeg"
    },
    {
      id: 16,
      nome: "Lasanha de Berinjela",
      ingredientes: `Berinjela
Molho de tomate
Queijo mussarela
Carne moída`,
      preparo: `1. Monte camadas de berinjela, molho, queijo e carne.
2. Asse por 40 min.`,
      imagem: "https://i.imgur.com/VlK9kUe.jpeg"
    },
    {
      id: 17,
      nome: "Brownie",
      ingredientes: `200g chocolate
100g manteiga
1 xícara açúcar
2 ovos
1/2 xícara farinha`,
      preparo: `1. Misture chocolate e manteiga derretidos.
2. Acrescente ovos, açúcar e farinha.
3. Asse por 25 min.`,
      imagem: "https://i.imgur.com/5tFvI3G.jpeg"
    },
    {
      id: 18,
      nome: "Crepe Doce",
      ingredientes: `1 xícara de leite
1 ovo
1 xícara de farinha
Recheio a gosto`,
      preparo: `1. Misture todos os ingredientes.
2. Cozinhe em frigideira.
3. Recheie a gosto.`,
      imagem: "https://i.imgur.com/hf4xMZt.jpeg"
    },
    {
      id: 19,
      nome: "Pudim de Leite",
      ingredientes: `1 lata de leite condensado
1 lata de leite
3 ovos
Açúcar para caramelizar`,
      preparo: `1. Bata tudo no liquidificador.
2. Coloque na forma caramelizada.
3. Asse em banho-maria.`,
      imagem: "https://i.imgur.com/NvM0P7j.jpeg"
    },
    {
      id: 20,
      nome: "Panettone",
      ingredientes: `500g farinha
200g açúcar
2 ovos
100g manteiga
Frutas cristalizadas`,
      preparo: `1. Misture todos os ingredientes.
2. Sove a massa.
3. Asse por 40-45 min.`,
      imagem: "https://i.imgur.com/9G2hL6O.jpeg"
    }
  ];

  function abrirReceita(id) {
    setReceitaAberta(receitaAberta === id ? null : id);
  }

  return (
    <div className="home">
      {/* HEADER */}
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
              <Link to="/pagina2" onClick={() => setPaginaAtiva("Página 2")}>Receitas</Link>
            </li>
            <li className={paginaAtiva === "Contato" ? "active" : ""}>
              <Link to="/contato" onClick={() => setPaginaAtiva("Contato")}>Contato</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* CONTEÚDO */}
      <div className="receitas-page">
        <h1 className="titulo">Receitas – Caderno da Lourdes</h1>

        <div className="lista-receitas">
          {receitas.map((r) => (
            <div key={r.id} className="card-lista">
              <h2 className="nome-receita" onClick={() => abrirReceita(r.id)}>
                {r.nome}
              </h2>

              {receitaAberta === r.id && (
                <div className="conteudo-receita">
                  <img src={r.imagem} alt={r.nome} className="img-receita" />
                  <p><strong>Ingredientes:</strong></p>
                  <ul>
                    {r.ingredientes.split("\n").map((i, index) => (
                      <li key={index}>{i}</li>
                    ))}
                  </ul>
                  <p><strong>Modo de preparo:</strong></p>
                  <p>{r.preparo}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
