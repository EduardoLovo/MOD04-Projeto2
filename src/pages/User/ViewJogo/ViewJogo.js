import React, { useEffect, useState } from 'react'
import { Api } from '../../../Api/Api';
import './ViewJogo.css'
import LinkButton from "../../../components/LinkButton/LinkButton";
import JogosCard from '../../../components/Jogos/JogosCard/JogosCard';



export default function ViewJogo(props) {
    const id = props.match.params.id;
    
    const [jogo, setJogo] = useState([]);


    useEffect(() => {
        const loadJogoList = async () => {
            const response = await Api.buildApiGetRequest(Api.readByIdUrl(id), true);

            const results = await response.json();

            setJogo(results);
        };

        loadJogoList();
    }, [id]);

    if (!jogo) {
        return <div>Loading...</div>;
    }

    console.log(jogo);    
    

    return (
        <div className="jogos">
            <div className="view">
                <div className="card_b">
                    <JogosCard jogo={jogo} />
                    <LinkButton
                        to={"/jogos/update/" + id}
                        className="form__submit"
                    >
                        Edit
                    </LinkButton>

                    <LinkButton
                        to={"/jogos/delete/" + id}
                        className="button button--danger"
                    >
                        Delete
                    </LinkButton>
            
                </div>
                <div className="span">
                    <label>
                        Descrição: 
                        <p>{jogo.descricao}</p>
                    </label><br/>
                    <label>Ano: <p>{jogo.ano}</p></label><br/>
                    <label>Nota: <p>{jogo.nota}/10</p></label><br/>
                    <label>Trailer: </label><br/>
                    <iframe width="560" height="350" src={`https://www.youtube.com/embed/${jogo.trailer}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe><br/>
                    <label>GamePlay: </label><br/>
                    <iframe width="560" height="350" src={`https://www.youtube.com/embed/${jogo.gameplay}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe><br/>
                    <label>Genero: <p>{jogo.generos}</p></label>
                </div>

            </div>
            

            
        </div>
    )
}
