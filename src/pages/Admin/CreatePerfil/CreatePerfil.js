import { Api } from "../../../Api/Api";
// import "./CreatePerfil.css"

export default function CreatePerfil (props) {
    const handleSubmit = async event => {
        event.preventDefault();

        const titulo = event.target.titulo.value;
        const imagem = event.target.imagem.value;
        
    
        const payload = {
            titulo,
            imagem,
            
            
        };
        console.log(payload);

        const response = await Api.buildApiPostRequest(
            Api.createUsuariosUrl(),
            payload,
            
        );


        if (response.status === 201) {

            props.history.push("/usuario");
        } else {
            //Error
        }
    }
    return (
        <div className="body_createUsu">           
            <div className="cardCreate">
                <div className="teste">
                    <h1 className="tituloCreate">Adicionar Novo Genero</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <div>
                            <label className="form__label" htmlFor="nome">
                                Nome:
                            </label>
                        </div>

                        <div>
                            <input
                                className="form__input-text"
                                type="text"
                                id="nome"
                                name="nome"
                            />
                        </div>               
                                        
                    
                        <div>
                            <input className="form__submit" type="submit" value="Criar" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
        
    )
}