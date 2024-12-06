import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    //<BrowserRouter>
      <div className="App">
        <header className="App-header"></header>
        {/* Navegação */}
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/root">
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
        <h1>Catálogo de Livros</h1>
        <Routes>
          <Route path="/root" element={<LivroLista />} />
          <Route path="/dados" element={<LivroDados />} />
        </Routes>
        <LivroLista />
      </div>
    //</BrowserRouter>
  );
}

export default App;

