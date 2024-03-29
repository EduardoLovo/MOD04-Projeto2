import React from "react";
import { Api } from "../../../Api/Api";
import { JwtHandler } from "../../../jwt-handler/JwtHandler";
import "./Login.css";

export default function Login(props) {
  const handleSubmit = async (event) => {
    // Previne o comportamento padrão do submit, que no caso do form é o refresh
    event.preventDefault();

    // Obtém os dados dos inputs
    const email = event.target.email.value;
    const senha = event.target.senha.value;

    // Constrói um payload com esses dados
    const payload = {
      email,
      senha,
    };

    // Faz uma requisição no backend
    const response = await Api.buildApiPostRequest(Api.loginUrl(), payload);

    const body = await response.json();

    if (response.status === 200) {
      // Login feito com sucesso

      const accessToken = body.accessToken;

    //   localStorage.setItem("JWT", accessToken);
      JwtHandler.setJwt(accessToken);

      console.log({ accessToken });

      props.history.push(`/`);
    } else {
      // Error
    }
  };
  return (
    <div className="body_login">
      <div className="cardLogin">
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label className="form__label" htmlFor="email">
              E-mail:
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
              type="password"
              id="senha"
              name="senha"
            />
          </div>

          <div>
            <input
              className="form__submit button--primary"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <div  className="buttonL">

          <button className="form__submit button--primary">
            <a className="a" href="/usuarios/create">
              Criar Novo Usuario
            </a>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
