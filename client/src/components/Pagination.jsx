import React from "react";

function Pagination({ allPokes, pagination, pokesByPage }) {
  const pageNum = [];
  for (let i = 0; i <= Math.ceil(allPokes / pokesByPage) - 1; i++) {
    pageNum.push(i + 1);
  }
  return (
    <nav>
      <ul>
        {pageNum &&
          pageNum.map((num) => (
            <li key={num}>
              <button onClick={() => pagination(num)}>{num}</button>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Pagination;
