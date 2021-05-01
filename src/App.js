import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./components/Menu";
import StudentForm from "./components/StudentForm";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Home />
        <Switch>
          <Route exact path="/newStudent" component={StudentForm} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
