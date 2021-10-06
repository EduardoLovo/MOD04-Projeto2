import './App.css';
import { Switch, Route } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { JogosList } from './components/JogosList/JogosList';


function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/jogos"  component={JogosList}></Route>
      </Switch>      
    </div>
  );
}

export default App;
