import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import EnterPage from "./components/EnterPage.jsx";
import Home from "./components/Home.jsx";
function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Route exact path={"/"} render={() => <EnterPage />}></Route>
        <Route path={"/home"} render={() => <Home />}></Route>
      </div>
    </React.Fragment>
  );
}

export default App;
