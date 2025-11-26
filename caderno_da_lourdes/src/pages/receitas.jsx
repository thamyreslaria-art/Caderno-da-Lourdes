import React from "react";
import AdicionarReceita from "./AdicionarReceita";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function PaginaReceitas() {
return (
<div>
<Header />
<AdicionarReceita />
<Footer />
</div>
);
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



return (
<div className="receitas-container">
<h1 className="titulo">📒 Adicionar Receita – Caderno da Lourdes</h1>


<form className="form-receita" onSubmit={adicionarReceita}>
<input
type="text"
placeholder="Nome da receita"
value={nome}
onChange={(e) => setNome(e.target.value)}
/>


<textarea
placeholder="Ingredientes (um por linha)"
value={ingredientes}
onChange={(e) => setIngredientes(e.target.value)}
rows={4}
/>


<textarea
placeholder="Modo de preparo"
value={preparo}
onChange={(e) => setPreparo(e.target.value)}
rows={4}
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
);


