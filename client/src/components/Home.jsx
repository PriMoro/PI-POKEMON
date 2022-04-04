import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokes } from "../actions";
import Pokemon from "./Pokemon";
function Home() {
  const dispatch = useDispatch();
  const pokes = useSelector((state) => state.pokemons);

  React.useEffect(() => {
    dispatch(getPokes());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getPokes());
  }

  return (
    <React.Fragment>
      <div>Home</div>
      <button onClick={(e) => handleClick(e)}>Show all Pokemons again</button>
      <div>
        {pokes?.map((poke) => {
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
