import React from 'react';
import { useState, useEffect} from 'react';
import { Api } from '../../../Api/Api';

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
                <div key={"jogos_list_" + index}>{jogos.titulo}</div>
            ))}
        </div>
    );
};