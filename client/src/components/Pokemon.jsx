import React from "react";

function Pokemon({ id, img, name, type }) {
  return (
    <div>
      <img src={img} alt="img" height="200 px" width="200 px" />
      <h4> {name} </h4>
      <h6>{type}</h6>
    </div>
  );
}

export default Pokemon;
