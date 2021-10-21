import React, { useEffect, useState } from "react";
import  JogosList  from "../../../components/Jogos/JogosList/JogosList";
import { JwtHandler } from "../../../jwt-handler/JwtHandler";
import './Home.css';

export function Home() {
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
    return (
        <div className="home">
            
            <div className="fundo">
                <h1>Jogos</h1>
                <div className="fav">   
                    
                    <div><JogosList/></div>
                </div>
            </div>

            <div className="fundo">
                <div className="fav">
                    <h1 >Meus Jogos Favoritos</h1>
                </div>            
                {isLogged ? (
                    <div>
                        <JogosList/>
                    </div>  
                ) : (
                    <p className="fazerlogin">Faça login para ver seus jogos</p>
                )}
                
                
            </div>
        </div>
    )
}