import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPoke } from "../actions";
import styles from "./SearchBar.module.css";
function toValidateName(name) {
  let errors = {};
  if (!name) {
    errors.name = "This field is required";
  } else if (!/^[a-z]{5,15}$/.test(name)) {
    errors.name =
      "The name must be an avaliable name with only 4 to 10 letters. ";
  }
  return errors;
}

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = React.useState("");
  const pokemons = useSelector((state) => state.pokemons);
  const [errors, setErrors] = React.useState({});

  function handleInput(e) {
    e.preventDefault();
    setName(e.target.value);
    setErrors(toValidateName(e.target.value));
  }
  function handleSubmit(e) {
    e.preventDefault();
    let p = pokemons.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );
    if (name.length === 0) {
      return alert("NOT AVALIABLE");
    } else if (p.length < 1) {
      return alert("NOT FOUND");
    } else {
      dispatch(searchPoke(name));
      setName("");
    }
  }
  return (
    <div>
      <input
        className={styles.input}
        type="text"
        value={name}
        placeholder="Search..."
        onChange={(e) => handleInput(e)}
      />
      {errors.name && <p>{errors.name}</p>}
      {errors.name || !name ? (
        <button className={styles.button} type="submit" disabled={true}>
          Ok
        </button>
      ) : (
        <button
          className={styles.button}
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Ok
        </button>
      )}
    </div>
  );
}

export default SearchBar;
