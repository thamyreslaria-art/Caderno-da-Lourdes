import { Link } from "react-router-dom";

// No nav:
<nav>
  <ul>
    <li className={paginaAtiva === "Home" ? "active" : ""} onClick={() => setPaginaAtiva("Home")}>
      <Link to="/">Home</Link>
    </li>
    <li className={paginaAtiva === "Página 2" ? "active" : ""} onClick={() => setPaginaAtiva("Página 2")}>
      <Link to="/pagina2">Receitas</Link>
    </li>
    <li className={paginaAtiva === "Contato" ? "active" : ""} onClick={() => setPaginaAtiva("Contato")}>
      <Link to="/contato">Contato</Link>
    </li>
  </ul>
</nav>
