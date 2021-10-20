import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { JwtHandler } from '../../jwt-handler/JwtHandler';
import './Header.css'

export default function Header(props) {
  const [isLogged, setIsLogged] = useState(JwtHandler.isJwtValid);

  useEffect(() => {
      const handleOnJwtChange = () => {
          setIsLogged(JwtHandler.isJwtValid());
      };

      window.addEventListener("onJwtChange", handleOnJwtChange);

      // Função de limpeza
      return () => {
          window.removeEventListener("onJwtChange", handleOnJwtChange);
      };
  }, []);

  //==========================================================================
  // const id = props.match.params.id;

    

    

    return (
      <div className="navbar">
        <div className="link">
          <Link className="link2" to="/">Home</Link>
        </div>
        <div className="link">
          <Link className="link2" to="/usuario" >Perfis</Link>
        </div>
        <div className="link">
          <Link className="link2" to="/jogos/create">Adicionar Novo Jogo</Link>
        </div>
        <div className="link">
          <Link className="link2" to="/generos/create">Adicionar Novo Genero</Link>
        </div>
        <div className="loginHeader">
        {isLogged ? (
            <Link className="link3" to="/logout">Logout</Link>
        ) : (
            <Link className="link3" to="/login">Login</Link>
        )}
             
        </div>
        
      </div>
        
    )
}
