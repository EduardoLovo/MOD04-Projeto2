import React from 'react';
import { useState, useEffect} from 'react';
import { Api } from '../../Api/Api';
import LinkButton from '../../components/LinkButton/LinkButton';
import './Perfis.css'

export const PerfisList = (props) => {
    const id = props.match.params.id;

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const loadUsuariosList = async () => {
            const response = await Api.buildApiGetRequest(Api.readByIdUsuariosUrl(id), true);

            const results = await response.json();

            setUsuarios(results);
        };

        loadUsuariosList();
    }, [id]);

    return (
        <div className="homePeril">
            
            <div className="fundoPerfil">
                <h1>Perfis</h1>
                <div className="fav">   
                    
                </div>

                
            </div>

            <div>
                <input className="form__submit" type="submit" value="Criar Novo Perfil" />
            </div>

            
        </div>
    )
}