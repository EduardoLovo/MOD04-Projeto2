import { Api } from "../../../Api/Api";

export default function CreateUsuario (props) {
    const handleSubmit = async event => {
        event.preventDefault();

        const nome = event.target.nome.value;
        const sobrenome = event.target.sobrenome.value;
        const cpf = event.target.cpf.value;
        const email = event.target.email.value;
        const senha = event.target.senha.value;
    
        const payload = {
            nome,
            sobrenome,
            cpf,
            email,
            senha,
            
        };
        console.log(payload);

        const response = await Api.buildApiPostRequest(
            Api.createUsuariosUrl(),
            payload,
            
        );

        const body = await response.json();

        if (response.status === 201) {
            const id = body.id;

            props.history.push(`/jogos/view/${id}`);
        } else {
            //Error
        }
    }
    return (
        <div className="body_createUsu">           
            <div className="cardCreate">
                <div className="teste">
                    <h1 className="tituloCreate">Adicionar Novo Jogo</h1>
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
                            <label className="form__label" htmlFor="sobrenome">
                                Sobrenome:
                            </label>
                        </div>

                        <div>
                            <input
                                className="form__input-text"
                                type="text"
                                id="sobrenome"
                                name="sobrenome"
                            />
                        </div>
                        <div>
                            <label className="form__label" htmlFor="cpf">
                                CPF:
                            </label>
                        </div>

                        <div>
                            <input
                                className="form__input-text"
                                type="text"
                                id="cpf"
                                name="cpf"
                            />
                        </div>

                        <div>
                            <label className="form__label" htmlFor="email">
                                Email:
                            </label>
                        </div>

                        <div>
                            <input
                                className="form__input-text"
                                type="text"
                                id="email"
                                name="email"
                            />
                        </div>
                        
                        <div>
                            <label className="form__label" htmlFor="senha">
                                Senha:
                            </label>
                        </div>

                        <div>
                            <input
                                className="form__input-text"
                                type="text"
                                id="senha"
                                name="senha"
                            />
                        </div>
                                          

                        
                        <div className="buttonCriarPerfil">
                            <input className="form__submit" type="submit" value="Criar" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
        
    )
}