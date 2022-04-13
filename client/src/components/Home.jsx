import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  filterApiOrDb,
  filterTypes,
  getPokes,
  orderByAttack,
  orderByName,
} from "../actions";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
import SearchBar from "./SearchBar";
import styles from "./Home.module.css";
function Home() {
  const dispatch = useDispatch();
  const allPokes = useSelector((state) => state.pokemons);

  const [order, setOrder] = React.useState("");
  // ! PAGINATION
  // !--------------------------------------------------------------
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pokesByPage /*funcion del estado no definida porque no la uso*/] =
    React.useState(12);
  const lastPoke = currentPage * pokesByPage;
  const firstPoke = lastPoke - pokesByPage;
  const currentPokesInPage = allPokes.slice(firstPoke, lastPoke);

  const pagination = (pageNum) => {
    setCurrentPage(pageNum);
  };
  // !--------------------------------------------------------------

  React.useEffect(() => {
    dispatch(getPokes());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getPokes());
  }
  function handleOrderName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`ordered ${e.target.value}`);
  }
  function handleOrderAttack(e) {
    e.preventDefault();
    dispatch(orderByAttack(e.target.value));
    setCurrentPage(1);
    setOrder(`ordered ${e.target.value}`);
  }
  function handleFilterApiDb(e) {
    e.preventDefault();
    dispatch(filterApiOrDb(e.target.value));
    setCurrentPage(1);
    setOrder(`filtered ${e.target.value}`);
  }
  function handleFilterTypes(e) {
    e.preventDefault();
    dispatch(filterTypes(e.target.value));
    setCurrentPage(1);
    setOrder(`filtered ${e.target.value}`);
  }
  return (
    <React.Fragment>
      <button className={styles.button} onClick={(e) => handleClick(e)}>
        Show all
      </button>
      <Link to="/create">
        <button className={styles.button}>Create</button>
      </Link>
      <div>
        <SearchBar />
        <div className={styles.center}>
          <div className={styles.description}>
            <select
              className={styles.button}
              onChange={(e) => handleOrderName(e)}
            >
              <option value="top">Upward</option>
              <option value="bottom">Downward</option>
            </select>
          </div>
          <div className={styles.description}>
            <select
              className={styles.button}
              onChange={(e) => handleOrderAttack(e)}
            >
              <option value="top">Upward</option>
              <option value="bottom">Downward</option>
            </select>
          </div>
          <div className={styles.description}>
            <select
              className={styles.button}
              onChange={(e) => handleFilterApiDb(e)}
            >
              <option value="all">All</option>
              <option value="api">Existing</option>
              <option value="db">Created</option>
            </select>
          </div>
          <select
            className={styles.button}
            onChange={(e) => handleFilterTypes(e)}
          >
            <option value="normal">Normal</option>
            <option value="fighting">Fighting</option>
            <option value="fire">Fire</option>
            <option value="flying">Flying</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="rock">Rock</option>
            <option value="bug">Bug</option>
            <option value="ghost">Ghost</option>
            <option value="steel">Steel</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="physic">Psychic</option>
            <option value="ice">Ice</option>
            <option value="shadow">Shadow</option>
            <option value="dragon">Dragon</option>
            <option value="dark">Dark</option>
            <option value="fairy">Fairy</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>

      <Pagination
        pokesByPage={pokesByPage}
        allPokes={allPokes.length}
        pagination={pagination}
      />
      <div className={styles.pokes}>
        {!currentPokesInPage.length && <h1>No</h1>}
        {currentPokesInPage ? (
          currentPokesInPage.map((poke) => {
            return (
              <div key={poke.id}>
                <Link to={`/home/${poke.id}`}>
                  <Pokemon
                    key={poke.id}
                    name={poke.name}
                    img={poke.img}
                    type={poke.type ? poke.type : poke.types}
                    //type={poke.type.length ? poke.type : poke.types}
                  />
                </Link>
              </div>
            );
          })
        ) : (
          <h1>Not </h1>
        )}
      </div>
    </React.Fragment>
  );
}

export default Home;
