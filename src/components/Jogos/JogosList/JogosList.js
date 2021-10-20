import React from 'react';
import { useState, useEffect} from 'react';
import { Api } from '../../../Api/Api';
import JogosCard from '../JogosCard/JogosCard';
import './JogosList.css'

export const JogosList = () => {
    const [jogos, setJogos] = useState([]);

    useEffect(() => {
        const loadJogosList = async () => {
            const response = await Api.buildApiGetRequest(Api.readAllUrl());

            const results = await response.json();

            setJogos(results);
        };

        loadJogosList();
    }, []);

    return (
        <div className="cardList">
            
            {jogos.map((jogo) =>
            <JogosCard jogo={jogo} key={jogo.id}/>
            )}
        </div>
    );
};