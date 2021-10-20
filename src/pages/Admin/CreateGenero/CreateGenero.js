import { Api } from "../../../Api/Api";

export default function CreateGenero (props) {
    const handleSubmit = async event => {
        event.preventDefault();

        const nome = event.target.nome.value;
        
    
        const payload = {
            nome,
        };

        console.log(payload);

        const response = await Api.buildApiPostRequest(
            Api.createGeneroUrl(),
            payload,
            
        );

        

        if (response.status === 201) {
            

            props.history.push("/");
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