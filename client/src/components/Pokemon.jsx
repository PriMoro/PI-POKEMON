import React from "react";
import styles from "./Pokemon.module.css";
function Pokemon({
  id,
  img,
  name,
  type,
  hp,
  attack,
  defense,
  speed,
  height,
  wi,
}) {
  //let ty = type.map((t) => t.charAt(0).toUpperCase() + t.slice(1));
  return (
    <div className={styles.color}>
      <h5>{id}</h5>
      <img src={img} alt="img" height="200 px" width="200 px" />
      <h4>{name}</h4>
      <h6>{type}</h6>
      <h5>{hp}</h5>
      <h5>{speed} </h5>
      <h5>{height}</h5>
    </div>
  );
}

export default Pokemon;
