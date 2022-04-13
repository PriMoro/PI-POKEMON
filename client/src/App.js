import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import CreatePokemon from "./components/CreatePokemon";
import Detail from "./components/Detail";
import EnterPage from "./components/EnterPage.jsx";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar";
function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Route path={"/"} render={() => <NavBar />}></Route>
        <Route exact path={"/"} render={() => <EnterPage />}></Route>
        <Route exact path={"/home"} render={() => <Home />}></Route>
        <Route path={"/home/:id"} render={() => <Detail />}></Route>
        <Route path={"/create"} render={() => <CreatePokemon />}></Route>
      </div>
    </React.Fragment>
  );
}

export default App;
