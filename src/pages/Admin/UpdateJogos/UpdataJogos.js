import React, { useEffect, useState } from "react";
import { Api } from "../../../Api/Api";

export default function UpdateJogo(props) {
    const id = props.match.params.id;

    const [jogo, setJogo] = useState(undefined);

    useEffect(() => {
        const loadJogo = async () => {
            const response = await Api.buildApiGetRequest(Api.readByIdUrl(id));

            const results = await response.json();

            setJogo(results);
        };

        loadJogo();
    }, [id]);

    if (!jogo) {
        return <div>Loading...</div>;
    }

    const handleSubmit = async event => {
        // Previne o comportamento padrão do submit, que no caso do form é o refresh
        event.preventDefault();

        // Obtém os dados dos inputs
        const titulo = event.target.titulo.value;
        const capa = event.target.capa.value;
        const descricao = event.target.descricao.value;
        const ano = +event.target.ano.value;
        const nota = +event.target.nota.value;
        const trailer = event.target.trailer.value;
        const gameplay = event.target.gameplay.value;

        // Constrói um payload com esses dados
        const payload = {
            titulo,
            capa,
            descricao,
            ano,
            nota,
            trailer,
            gameplay,
        };

        // Faz uma requisição no backend
        const response = await Api.buildApiPatchRequest(
            Api.updateUrl(id),
            payload,
            true
        );

        const body = await response.json();

        if (response.status === 200) {
            // jogo updated successfully

            const id = body.id;

            props.history.push(`/jogo/view/${id}`);
        } else {
            // Error
        }
    };
    console.log('passou');
    return (
        <div className="update_body">
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label className="form__label" htmlFor="titulo">
                        Titulo:
                    </label>
                </div>

                <div>
                    <input
                        className="form__input-text"
                        type="text"
                        id="titulo"
                        name="titulo"
                        defaultValue={jogo.titulo}
                    />
                </div>

                <div>
                    <label className="form__label" htmlFor="capa">
                        Capa:
                    </label>
                </div>

                <div>
                    <input
                        className="form__input-text"
                        type="text"
                        id="capa"
                        name="capa"
                        defaultValue={jogo.capa}
                    />
                </div>

                <div>
                    <label className="form__label" htmlFor="descricao">
                        Descricao:
                    </label>
                </div>

                <div>
                    <input
                        className="form__input-text"
                        type="text"
                        id="descricao"
                        name="descricao"
                        defaultValue={jogo.descricao}
                    />
                </div>

                <div>
                    <label className="form__label" htmlFor="ano">
                        Ano:
                    </label>
                </div>

                <div>
                    <input
                        className="form__input-text"
                        type="number"
                        id="ano"
                        name="ano"
                        defaultValue={jogo.ano}
                    />
                </div>

                <div>
                    <label className="form__label" htmlFor="nota">
                        Nota:
                    </label>
                </div>

                <div>
                    <input
                        className="form__input-text"
                        type="number"
                        id="nota"
                        name="nota"
                        defaultValue={jogo.nota}
                    />
                </div>

                <div>
                    <label className="form__label" htmlFor="trailer">
                        Trailer:
                    </label>
                </div>

                <div>
                    <input
                        className="form__input-text"
                        type="text"
                        id="trailer"
                        name="trailer"
                        defaultValue={jogo.trailer}
                    />
                </div>

                <div>
                    <label className="form__label" htmlFor="gameplay">
                        GamePlay:
                    </label>
                </div>

                <div>
                    <input
                        className="form__input-text"
                        type="text"
                        id="gameplay"
                        name="gameplay"
                        defaultValue={jogo.gameplay}
                    />
                </div>

                <div>
                    <input
                        className="form__submit button button--primary"
                        type="submit"
                        value="Salvar"
                    />
                </div>
            </form>
        </div>
    );
}