import React from "react";
import { Api } from "../../../Api/Api";
import './DeleteJogos.css'

export default function DeleteJogo(props) {
    const id = props.match.params.id;

    const handleDelete = async event => {
        const response = await Api.buildApiDeleteRequest(Api.deleteUrl(id));

        if (response.status === 204) {
            
            props.history.push(`/`);
        } else {
            // Error
        }
    };

    return (
        <div className="confirma-Delete">
            <div >
                <h2 className="confirm">Você tem certeza que deseja excluir esse item?</h2>
                <br />
                <br />
                <div className="buttonDelete">
                    <button
                        className="button button--danger"
                        onClick={handleDelete}
                    >
                        Confirmar exclusão
                    </button>
                </div>
            </div>
        </div>
    );
}