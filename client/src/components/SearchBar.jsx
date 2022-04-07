import React from "react";
import { useDispatch } from "react-redux";
import { searchPoke } from "../actions";

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = React.useState("");

  function handleInput(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (name.length === 0) {
      return alert("NOT");
    } else {
      dispatch(searchPoke(name));
      // setName("");
    }
  }
  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="Search..."
        onChange={(e) => handleInput(e)}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Ok
      </button>
    </div>
  );
}

export default SearchBar;
