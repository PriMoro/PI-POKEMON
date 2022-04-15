import React from "react";
import styles from "./Pagination.module.css";
function Pagination({ allPokes, pagination, pokesByPage }) {
  const pageNum = [];
  for (let i = 0; i <= Math.ceil(allPokes / pokesByPage) - 1; i++) {
    pageNum.push(i + 1);
  }
  return (
    <nav>
      <ul className={styles.center}>
        {pageNum &&
          pageNum.map((num) => (
            <li className={styles.split} key={num}>
              <button className={styles.color} onClick={() => pagination(num)}>
                {num}
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Pagination;
