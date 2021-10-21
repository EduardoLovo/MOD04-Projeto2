import React from 'react';
import { useState, useEffect} from 'react';
import { Api } from '../../../Api/Api';
import JogosCard from '../JogosCard/JogosCard';
import './JogosList.css'

export default function JogosList()  {
    const [jogos, setJogos] = useState([]);

    useEffect(() => {
        const loadJogosList = async () => {
            const response = await Api.buildApiGetRequest(Api.readAllUrl());

            const results = await response.json();

            setJogos(results);
        };

        loadJogosList();
    }, []);

    //=======================================================================

    const[acounts,setAcounts] = useState([]);
    
    useEffect(()=>{
        const acount = [
            {
                transform:"translate3d(-100px, 0px, 100px)",
                height:"70%",
                zIndex:1
            },{
                transform:"translate3d(-50px, 0px, 50px)",
                height:"80%",
                zIndex:2
            },{
                transform:"translate3d(0px, 0px, 0px)",
                height:"90%",
                zIndex:3
            },{
                transform:"translate3d(50px, 0px, 50px)",
                height:"80%",
                zIndex:2
            },{
                transform:"translate3d(100px, 0px, 100px)",
                height:"70%",
                zIndex:1
            }
        ];
    setAcounts(acount);
    },[]) 
    const prevPerfil=(event)=>{
        event.preventDefault();
        const acount = [];
        for(let count = 1; count<5; count++){
            acount.push(acounts[count]);
        }
        acount.push(acounts[0]);
        setAcounts(acount);
    }
    const nextPerfil=(event)=>{
        event.preventDefault();
        const acount = [];
        acount.push(acounts[4]);
        for(let count = 0; count<4; count++){
            acount.push(acounts[count]);
        }
        setAcounts(acount);
        
    }
    

    return (
        // <div className="cardList">
            
        //     {jogos.map((jogo) =>
        //     <JogosCard jogo={jogo} key={jogo.id}/>
        //     )}
        // </div>

        //======================================================

        <div className="perfil" >
        <div className="profiles">
        <div className="profiles-container">
            {jogos.map((jogo) =>
                <JogosCard jogo={jogo} key={jogo.id}/>
                )}
        </div>
        <div className="profiles-controls" >
            <button id="controls-prev" onClick={prevPerfil} >{"<"}</button>
            <button id="controls-next" onClick={nextPerfil}>{">"}</button>
        </div>
      </div>
      </div>
    );
};