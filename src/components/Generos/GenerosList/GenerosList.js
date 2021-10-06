import React from 'react';
import { useState, useEffect} from 'react';
import { Api } from '../../../Api/Api';

export const GenerosList = () => {
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        const loadGenerosList = async () => {
            const response = await Api.buildApiGetRequest(Api.generoUrl());

            const results = await response.json();

            setGeneros(results);
        };

        loadGenerosList();
    }, []);

    return (
        <div>
            {generos.map((generos, index) => (
                <div key={"generos_list_" + index}>{generos.nome}</div>
            ))}
        </div>
    );
};