import React from 'react';
import { useState, useEffect} from 'react';
import { Api } from '../../../Api/Api';
import JogosCard from '../JogosCard/JogosCard';
import './JogosList.css'

export const UsuariosList = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const loadUsuariosList = async () => {
            const response = await Api.buildApiGetRequest(Api.readAllUrl());

            const results = await response.json();

            setUsuarios(results);
        };

        loadUsuariosList();
    }, []);

    return (
        <div className="cardList">
            
            {usuarios.map((perfil) =>
            <div perfil={perfil} key={perfil.id}/>
            )}
        </div>
    );
};