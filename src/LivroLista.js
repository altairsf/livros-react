import React, { useEffect, useState } from "react";
import { ControleLivros } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora();

//const LinhaLivro = ({ livro, excluir }) => {
//const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
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
    const livrosObtidos = controleLivro.obterLivros();
    setLivros(livrosObtidos);
    setCarregado(true);
  }, [carregado]);

  const excluir = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(false); // Para reforçar o redesenho da página
  };

  return (
    <main>
      <h1>Catálogo de Livros</h1>
      <table className="table">
        <thead class="table-dark">
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;