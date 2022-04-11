import React from "react";
import styles from "./Pokemon.module.css";
function Pokemon({
  id,
  img,
  name,
  type,
  types,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
}) {
  //let ty = type.map((t) => t.charAt(0).toUpperCase() + t.slice(1));
  return (
    <div className={styles.color}>
      <h5>{id}</h5>
      <img src={img} alt="img" height="200 px" width="200 px" />
      <h4>{name.toUpperCase()}</h4>
      <div>
        {type && type.length === 2 ? (
          <h6>{type[0] + " " + type[1]}</h6>
        ) : type && type.length > 0 ? (
          <h6>{type[0]}</h6>
        ) : types && Object.entries(types).length > 0 ? (
          <h6>{types[0]}</h6>
        ) : null}
      </div>
    </div>
  );
}

export default Pokemon;
