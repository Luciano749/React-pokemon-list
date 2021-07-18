import "./App.css";

import List from "./components/List";
import View from "./components/View";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/pokemons/list" component={List}></Route>
          <Route path="/pokemons/:name" component={View}></Route>
          <Route path="/" exact>
            <Redirect to="/pokemons/list"></Redirect>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
