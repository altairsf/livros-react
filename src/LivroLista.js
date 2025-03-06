import React, { useEffect, useState } from "react";
import { ControleLivros } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora();


function LinhaLivro(props) {
  const { livro, excluir } = props;
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        {livro.autores.map((autor, index) => (
          <div key={index}>{autor}</div>
        ))}
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => excluir(livro.codigo)}
        >
          Excluir
        </button>
      </td>
    </tr>
  );
}

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    controleLivro.obterLivros().then((obterTodos) => {
      setLivros(obterTodos);
      setCarregado(true);
    });
  }, [carregado]);

  const excluir = (codigo) => {
    controleLivro.excluir(codigo).then(() => {
      setCarregado(false); // Para reforçar o redesenho da página
    });
  };

  return (
    <main>
      <div class="container-fluid">
        <h1>Catálogo de Livros</h1>
        <table className="table table-striped table-bordered">
          <thead class="table-dark">
            <tr>
              <th>Título</th>
              <th>Resumo</th>
              <th>Editora</th>
              <th>Autores</th>
            </tr>
          </thead>
        <tbody>
          {livros.map((livro, index) => (
            <LinhaLivro key={index} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </div>
  </main>
  );
};

export default LivroLista;