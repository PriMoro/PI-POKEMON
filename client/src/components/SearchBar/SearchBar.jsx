import React from "react";
import { useDispatch } from "react-redux";
import { getPokes, searchPoke } from "../../actions";
import styles from "./SearchBar.module.css";
function toValidateName(name) {
  let errors = {};
  if (!name) {
    errors.name = "This field is required";
  } else if (!/^[a-z]{3,15}$/.test(name)) {
    errors.name =
      "The name must be an avaliable name with only 3 to 10 lowercase letters. ";
  }
  return errors;
}

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = React.useState("");
  //const pokemons = useSelector((state) => state.pokemons);
  const [errors, setErrors] = React.useState({});

  function handleInput(e) {
    e.preventDefault();
    setName(e.target.value);
    setErrors(toValidateName(e.target.value));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (name.length === 0) {
      return alert("NOT AVALIABLE");
    } else {
      dispatch(searchPoke(name));
      dispatch(getPokes());
      setName("");
    }
  }
  return (
    <div>
      <div className={styles.row}>
        <input
          className={errors.name ? styles.danger : styles.input}
          type="text"
          value={name}
          placeholder="Search..."
          onChange={(e) => handleInput(e)}
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}
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
    </div>
  );
}

export default SearchBar;
