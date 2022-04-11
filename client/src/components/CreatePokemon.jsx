import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTypes, postPokes } from "../actions";

function CreatePokemon() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  //console.log(types);
  const [input, setInput] = React.useState({
    name: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    weight: "",
    height: "",
    speed: "",
    type: [],
  });
  React.useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);
  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <h1>Here you can create your Pokemon</h1>
      <form>
        <div>
          <label>Name:</label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            value={input.name}
            name="name"
          ></input>
        </div>
        <div>
          <label>Image:</label>
          <input
            onChange={(e) => handleChange(e)}
            type="url"
            value={input.img}
            name="img"
          ></input>
        </div>
        <div>
          <label>Health Points:</label>
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            value={input.hp}
            name="hp"
          ></input>
        </div>
        <div>
          <label>Attack:</label>
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            value={input.attack}
            name="attack"
          ></input>
        </div>
        <div>
          <label>Defense:</label>
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            value={input.defense}
            name="defense"
          ></input>
        </div>
        <div>
          <label>Height:</label>
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            value={input.height}
            name="height"
          ></input>
        </div>
        <div>
          <label>Weight:</label>
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            value={input.weight}
            name="weight"
          ></input>
        </div>
        <div>
          <label>Speed:</label>
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            value={input.speed}
            name="speed"
          ></input>
        </div>
        <div>
          <label>Types</label>
          <select onChange={(e) => handleChange(e)}>
            {types.length &&
              types.map((t) => (
                <option key={t.name} value={t.name}>
                  {t.name}
                </option>
              ))}
          </select>
        </div>
      </form>
      <button type="submit">CREATE</button>
      <Link to="/home">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default CreatePokemon;
