import React from 'react'
import { useHistory } from 'react-router'
// import { Api } from '../../../Api/Api';
import './JogosCard.css'

export default function JogosCard({jogo}) {
    
    
    const history = useHistory();

    const handleClick = () => {
        history.push(`/jogos/view/${jogo.id}`);
    };

    return (
        <div className="body">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            
            <div className="container">
                <div className="card" onClick={handleClick}>
                    <div className="imgBx">
                    <img src={jogo.capa} alt={jogo.titulo + "'s image"}/>
                    </div>
                    <div className="contentBx">
                    <h2>{jogo.titulo}</h2>
                    <div className="size">
                        <h3>Nota :</h3>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                    <h3 className="ano">{jogo.ano}</h3>
                    {/* <a href="">Add</a> */}
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}
