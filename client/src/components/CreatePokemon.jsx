import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTypes } from "../actions";
import styles from "./CreatePokemon.module.css";
function toValidateInput(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "This field is required";
  } else if (!/^[a-z]{4,10}$/.test(input.name)) {
    errors.name =
      "The name must be an avaliable name with only 4 to 10 letters. ";
  } else if (!input.img) {
    errors.img = "This field is required";
  } else if (
    !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(
      input.img
    )
  ) {
    errors.img = "The image must be an avaliable url";
  } else if (!input.hp) {
    errors.hp = "This field is required";
  } else if (!/^[0-9_-]{1,2}$/.test(input.hp) || input.hp < 1) {
    errors.hp = "Number must be greater than 0 and younger than 100";
  } else if (!input.attack) {
    errors.attack = "This field is required";
  } else if (!/^[0-9_-]{1,2}$/.test(input.attack) || input.attack < 1) {
    errors.attack = "Number must be greater than 0 and younger than 100";
  } else if (!input.defense) {
    errors.defense = "This field is required";
  } else if (!/^[0-9_-]{1,2}$/.test(input.defense) || input.defense < 1) {
    errors.defense = "Number must be greater than 0 and younger than 100";
  } else if (!input.weight) {
    errors.weight = "This field is required";
  } else if (!/^[0-9_-]{1,2}$/.test(input.weight) || input.weight < 1) {
    errors.weight = "Number must be greater than 0 and younger than 100";
  } else if (!input.height) {
    errors.height = "This field is required";
  } else if (!/^[0-9_-]{1,2}$/.test(input.height) || input.height < 1) {
    errors.height = "Number must be greater than 0 and younger than 100";
  } else if (!input.speed) {
    errors.speed = "This field is required";
  } else if (!/^[0-9_-]{1,2}$/.test(input.speed) || input.speed < 1) {
    errors.speed = "Number must be greater than 0 and younger than 100";
  } else if (!input.type.length || input.type.length > 2) {
    errors.type = "You can select 2 types only";
  }
  return errors;
}

function CreatePokemon() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  //console.log(types);
  const [errors, setErrors] = React.useState({});
  //* to save data from form, a local state is created with all properties back-end needs
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
    console.log(input);
    setErrors(
      toValidateInput({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }
  function handleSelect(e) {
    setInput({ ...input, type: [...input.type, e.target.value] });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    alert("Pokemon was created successfully");
    //console.log(Object.entries(toValidateInput(input)));
    fetch("http://localhost:3001/pokemons", {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        window.alert(data);
      })
      .catch((error) => console.error("Error:", error));
    //dispatch(postPokes(input));

    setInput({
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
  }
  return (
    <div>
      <div className={styles.center}>
        <Link to="/home">
          <button className={styles.buttonBack}>Back to Home</button>
        </Link>
        <h1 className={styles.h1}>HERE YOU CAN CREATE YOUR POKEMON</h1>
      </div>

      <div className={styles.split}>
        <div className={styles.text}>
          <p>REMEMBER THE FOLLOWING: </p>
          <p>
            NAME must contain lowercase letters only (4 to 10 letters) <br />
            IMAGE must be a valid image address <br />
            HP must contain only integers numbers from 1 to 99 <br /> ATTACK
            must contain only integers numbers from 1 to 99 <br /> DEFENSE must
            contain only integers numbers from 1 to 99 <br />
            SPEED must contain only integers numbers from 1 to 99 <br /> HEIGHT
            must contain only integers from 1 to 99 <br /> WEIGHT must contain
            only integers numbers from 1 to 99 <br /> TYPE you can only choose
            up to two different types <br /> The button will only be activated
            when all your data is valid.
          </p>
          <p>ALL FIELDS ARE REQUIRED</p>
        </div>

        <div className={styles.inputs}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label className={styles.label}>Name:</label>
              <input
                className={styles.input}
                onChange={(e) => handleChange(e)}
                type="text"
                value={input.name}
                name="name"
              ></input>
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
              <label className={styles.label}>Image:</label>
              <input
                className={styles.input}
                onChange={(e) => handleChange(e)}
                type="url"
                value={input.img}
                name="img"
              ></input>
              {errors.img && <p>{errors.img}</p>}
            </div>
            <div>
              <label className={styles.label}>Health Points:</label>
              <input
                className={styles.input}
                onChange={(e) => handleChange(e)}
                type="number"
                value={input.hp}
                name="hp"
              ></input>
              {errors.hp && <p>{errors.hp}</p>}
            </div>
            <div>
              <label className={styles.label}>Attack:</label>
              <input
                className={styles.input}
                onChange={(e) => handleChange(e)}
                type="number"
                value={input.attack}
                name="attack"
              ></input>
              {errors.attack && <p>{errors.attack}</p>}
            </div>
            <div>
              <label className={styles.label}>Defense:</label>
              <input
                className={styles.input}
                onChange={(e) => handleChange(e)}
                type="number"
                value={input.defense}
                name="defense"
              ></input>
              {errors.defense && <p>{errors.defense}</p>}
            </div>
            <div>
              <label className={styles.label}>Height:</label>
              <input
                className={styles.input}
                onChange={(e) => handleChange(e)}
                type="number"
                value={input.height}
                name="height"
              ></input>
              {errors.height && <p>{errors.height}</p>}
            </div>
            <div>
              <label className={styles.label}>Weight:</label>
              <input
                className={styles.input}
                onChange={(e) => handleChange(e)}
                type="number"
                value={input.weight}
                name="weight"
              ></input>
              {errors.weight && <p>{errors.weight}</p>}
            </div>
            <div>
              <label className={styles.label}>Speed:</label>
              <input
                className={styles.input}
                onChange={(e) => handleChange(e)}
                type="number"
                value={input.speed}
                name="speed"
              ></input>
              {errors.speed && <p>{errors.speed}</p>}
            </div>
            <div>
              <label className={styles.label}>Types</label>
              <select
                className={styles.select}
                onChange={(e) => handleSelect(e)}
              >
                {types.length &&
                  types.map((t) => (
                    <option key={t.name} value={t.name}>
                      {t.name}
                    </option>
                  ))}
              </select>
              <div>
                <ul>
                  <li>{input.type.map((t) => t + ", ")} </li>
                </ul>
              </div>
            </div>
            {!input.type.length ||
            input.type.length > 2 ||
            input.type[0] === input.type[1] ||
            errors.name ||
            errors.img ||
            errors.hp ||
            errors.attack ||
            errors.defense ||
            errors.weight ||
            errors.height ||
            errors.speed ? (
              <button type="submit" disabled={true}>
                CREATE
              </button>
            ) : (
              <button
                className={styles.buttonCreate}
                type="submit"
                disabled={!input}
              >
                CREATE
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePokemon;
