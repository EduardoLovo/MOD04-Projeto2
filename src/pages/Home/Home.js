import { JogosCard } from "../../components/Jogos/JogosCard/JogosCard";
import { JogosList } from "../../components/Jogos/JogosList/JogosList";
// import { UsuariosList } from "../../components/Usuarios/UsuariosList/UsuariosList";
import './Home.css';

export function Home(){
    return (
        <div>
            <h1>Meus Jogos Favoritos</h1>

            
            <h1>Jogos</h1>
            <JogosList/>
            <JogosCard/>
        </div>
    )
}