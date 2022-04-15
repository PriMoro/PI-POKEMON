import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import CreatePokemon from "./components/CreatePokemon/CreatePokemon";
import Detail from "./components/Detail/Detail";
import EnterPage from "./components/EnterPage/EnterPage";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
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
