import React from 'react';
import './App.css';
import List from "./components/List";
import Completed from "./components/Completed";
import Theme from "./components/Theme";
import Error from "./components/Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return ([
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={List}></Route>
          <Route path='/completed' component={Completed} ></Route>
          <Route path='/theme' component={Theme} ></Route>
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  ]);
}

export default App;
