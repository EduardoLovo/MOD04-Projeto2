import React, { useEffect, useState } from 'react'
import { Api } from '../../../Api/Api';
import Select from "react-select";

import './CreateJogos.css';

export default function CreateJogos(props) {
    const [generos, setGeneros] = useState([]);
    
    const [generosIds, setGenerosIds] = useState([]);

    useEffect(() => {
        const loadGeneros = async () => {
            const response = await Api.buildApiGetRequest(
                Api.readAllGenerosUrl(),
                true
            );

            const results = await response.json();

            setGeneros(results);
        };

        loadGeneros();
    }, []);

    const handleSubmit = async event => {
        event.preventDefault();

        const titulo = event.target.titulo.value;
        const capa = event.target.capa.value;
        const descricao = event.target.descricao.value;
        const ano = +event.target.ano.value;
        const nota = +event.target.nota.value;
        const trailer = event.target.trailer.value;
        const gameplay = event.target.gameplay.value;

        const payload = {
            titulo,
            capa,
            descricao,
            ano,
            nota,
            trailer,
            gameplay,
            generosIds,
        };

        const response = await Api.buildApiPostRequest(
            Api.createJogosUrl(),
            payload,
            true
            
        );

        const body = await response.json();

        if (response.status === 201) {
            const id = body.id;

            props.history.push(`/jogos/view/${id}`);
        } else {
            //Error
        }
    };

    const options = generos.map(generos => ({
        value: generos.id, 
        label: generos.nome
    }))

    const handleGenerosChange =(selectedOption) => {
        setGenerosIds(selectedOption.map(option => option.value));
      }

    return (
        <div className="body_create">           
            <div className="cardCreate">
                <div className="teste">
                    <h1 className="tituloCreate">Adicionar Novo Jogo</h1>
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
                            />
                        </div>

                        <div>
                            <label className="form__label" htmlFor="descricao">
                                Descrição:
                            </label>
                        </div>

                        <div>
                            <input
                                className="form__input-text"
                                type="text"
                                id="descricao"
                                name="descricao"
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
                            />
                        </div>

                        <div>
                            <label className="form__label" htmlFor="gamePlay">
                                GamePlay:
                            </label>
                        </div>

                        <div>
                            <input
                                className="form__input-text"
                                type="text"
                                id="gameplay"
                                name="gameplay"
                            />
                        </div>

                        <div>
                            <label className="form__label" htmlFor="generosIds">Generos</label>
                            <br />
                        </div>

                        <div className="selectGenero"
                            type="number"
                            id="generosIds"
                            name="generosIds">
                            <Select isMulti options={options} onChange={handleGenerosChange}/>
                        </div>

                        <div>
                            <input className="form__submit" type="submit" value="Add" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
