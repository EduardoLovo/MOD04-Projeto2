import React from 'react';
import { useState, useEffect} from 'react';
import { Api } from '../../../Api/Api';
// import { JogosCard } from '../JogosCard/JogosCard';

export const JogosList = () => {
    const [jogos, setJogos] = useState([]);

    useEffect(() => {
        const loadJogosList = async () => {
            const response = await Api.buildApiGetRequest(Api.jogoUrl());

            const results = await response.json();

            setJogos(results);
        };

        loadJogosList();
    }, []);

    return (
        <div>
            {jogos.map((jogos, index) => (
                // <JogosCard jogos={jogos} key={jogos._id}/>
                <div key={"jogos_list_" + index}>{jogos.titulo}</div>
            ))}
        </div>
    );
};