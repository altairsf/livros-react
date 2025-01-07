import React from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          {/* Navegação */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
        </header>
      {/* <LivroLista /> */}
        <Routes>
          <Route path="/root" element={<LivroLista />} />
          <Route path="/dados" element={<LivroDados />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;