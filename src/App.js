import './App.css';
import { Switch, Route } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { JogosList } from './components/Jogos/JogosList/JogosList';
import { GenerosList } from './components/Generos/GenerosList/GenerosList';


function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/jogos"  component={JogosList}></Route>
          <Route path="/generos"  component={GenerosList}></Route>
      </Switch>      
    </div>
  );
}

export default App;
