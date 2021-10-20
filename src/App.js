//CSS
import './App.css';
import "./styles/form.css";

//React
import { Switch, Route } from "react-router-dom";

//Pages
import ViewJogo from './pages/User/ViewJogo/ViewJogo';
import Header from './components/Header/Header';
import DeleteJogo from './pages/Admin/DeleteJogos/DeleteJogos';
import CreateUsuario from './pages/User/CreateUsuarios/CreateUsuarios';
import Login from './pages/User/Login/Login';
// import Perfis from './pages/User/Perfis/Perfis';
import Footer from './components/Footer/Footer';
import { Home } from './pages/User/Home/Home'

import GuardedRoute from './components/GuardedRoute/GuardedRoute';
import Logout from './pages/Logout/Logout';
import CreateJogos from './pages/Admin/CreateJogos/CreateJogos';
import UpdateJogo from './pages/Admin/UpdateJogos/UpdataJogos';
import CreateGenero from './pages/Admin/CreateGenero/CreateGenero';
import { PerfisList } from './pages/Perfis/Perfis';
import CreatePerfil from './pages/CreatePerfil/CreatePerfil';
// import LoginAdmin from './pages/Admin/LoginAdmin/LoginAdmin';


function App() {
  return (
    <div className="App">
      <Header/>
        <Switch>
            {/* PAG ABERTA */}
            <Route path="/" exact={true} component={Home}/>
            <Route path="/logout" component={Logout} />
            <Route path="/login"  component={Login}/>
            <Route path="/usuarios/create"  component={CreateUsuario}/>
            <Route path="/jogos/view/:id"  component={ViewJogo}/>
            {/* Logado */}
            <GuardedRoute path="/jogos/create"  component={CreateJogos}/>
            <GuardedRoute path="/jogos/delete/:id"  component={DeleteJogo}/>
            <GuardedRoute path="/jogos/update/:id"  component={UpdateJogo}/>
            <GuardedRoute path="/usuario"  component={PerfisList}/>
            <GuardedRoute path="/generos/create"  component={CreateGenero}/>
            <GuardedRoute path="/perfis/create"  component={CreatePerfil}/>

        </Switch>  
      <Footer/>    
    </div>
  );
}

export default App;
