import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokes, orderByAttack, orderByName } from "../actions";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

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
  return (
    <React.Fragment>
      <div>Home</div>
      <button onClick={(e) => handleClick(e)}>Show all Pokemons again</button>

      <select onChange={(e) => handleOrderName(e)}>
        <option value="top">Upward</option>
        <option value="bottom">Downward</option>
      </select>
      <select onChange={(e) => handleOrderAttack(e)}>
        <option value="top">Upward</option>
        <option value="bottom">Downward</option>
      </select>
      <Pagination
        pokesByPage={pokesByPage}
        allPokes={allPokes.length}
        pagination={pagination}
      />
      <div>
        {currentPokesInPage?.map((poke) => {
          return (
            <Pokemon
              key={poke.id}
              img={poke.img}
              name={poke.name}
              type={poke.type}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default Home;
