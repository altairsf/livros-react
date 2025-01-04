import React, { useState } from "react";
import { ControleEditora } from "./controle/ControleEditora";
import { ControleLivros } from "./controle/ControleLivros";
import { useNavigate } from "react-router-dom";

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora();

const LivroDados = () => {
    //Vetor de opções de Editoras
    const opcoes = controleEditora.getEditoras().map((editora) => ({
        value: editora.codEditora,
        text: editora.nome,
    }));

    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setcodEditora] = useState(opcoes[0]?.value || 0);
    const navigate = useNavigate();

    //Método para tratar a seleção da comboBox de Editoras
    const tratarCombo = (event) =>{
        setcodEditora(Number(event.target.value));
    };

    //Método incluir Livros
    const incluir = (event) => {
        event.preventDefault(); //Para evitar o comportamento padrão do formulário

        const novoLivro = {
            codigo: 0,
            titulo,
            resumo,
            autores: autores.split("\n"),
            codEditora,
        };

        controleLivro.incluir(novoLivro); //Adiciona um novo livro
        navigate("/"); //Volta para a página
    };

    return (
        <main>
            <h1>Dados do Livro</h1>
            <form onSubmit={incluir}>
                <div>
                    <label>Título</label>
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
                    <label>Autores (1 por linha):</label>
                    <textarea
                        value={autores}
                        onChange={(e) => setAutores(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <button type="submit">Salvar Dados</button>
                </div>
            </form>
        </main>
    );

};

export default LivroDados;