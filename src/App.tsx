import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import LivroLista from "./LivroLista";
import { LivroDados} from "./LivroDados";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">    
          <h1>Catálogo de Livros</h1>
      </header>
       {/* Navegação */}
      <nav className="navbar bg-dark-subtle menu">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link" to="/">
            Catálogo
            </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/dados">
            Novo
          </Link>
            </li>
          </ul>
        </div>
      </nav>
      <LivroLista />
    </div>
    </BrowserRouter>
  );
}

export default App;

