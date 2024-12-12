import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ControleLivros } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora();

const LivroDados = () => {
    // Vetor de opções de editoras
    const opcoes = controleEditora.getEditoras().map((editora) => ({
        value: editora.codEditora,
        text: editora.nome,
    }));

    // Propriedades de estado
    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setCodEditora] = useState(opcoes[0]?.value || 0);

    const navigate = useNavigate();

    // Método para tratar a seleção da combo box
    const tratarCombo = (event) => {
        setCodEditora(Number(event.target.value));
    };

    // Método para incluir um novo livro
    const incluir = (event) => {
        event.preventDefault(); // Evita o comportamento padrão do formulário

        const novoLivro = {
            codigo: 0,
            titulo,
            resumo,
            autores: autores.split("\n"),
            codEditora,
        };

        controleLivro.incluir(novoLivro); // Adiciona o novo livro
        navigate("/"); // Redireciona para a página de listagem
    };

    return (
        <main>
            <h1>Cadastro de Livro</h1>
            <form onSubmit={incluir}>
                <div>
                    <label>Título:</label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Resumo:</label>
                    <textarea
                        value={resumo}
                        onChange={(e) => setResumo(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Autores (separados por linha):</label>
                    <textarea
                        value={autores}
                        onChange={(e) => setAutores(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Editora:</label>
                    <select value={codEditora} onChange={tratarCombo}>
                        {opcoes.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.text}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <button type="submit">Salvar</button>
                </div>
            </form>
        </main>
    );
};

export default LivroDados;
