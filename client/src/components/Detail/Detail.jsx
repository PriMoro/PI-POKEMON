import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions";
import styles from "./Detail.module.css";
function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const pokeDetail = useSelector((state) => state.pokeDetail);

  React.useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      <Link to="/home">
        <button className={styles.button}>BACK</button>
      </Link>
      {Object.entries(pokeDetail).length && (
        <div>
          <div className={styles.detail}>
            <div>
              <img className={styles.img} src={pokeDetail[0].img} alt="img" />
            </div>
            <div className={styles.dataDetail}>
              <h1 className={styles.title}>POKEMON DETAIL</h1>
              <h1>Name: {pokeDetail[0].name.toUpperCase()} ♥</h1>
              <h2>Number: {pokeDetail[0].id}</h2>
              <h2>Health Points: {pokeDetail[0].hp}</h2>
              <h2>Speed: {pokeDetail[0].speed}</h2>
              <h2>Attack: {pokeDetail[0].attack}</h2>
              <h2>Defense: {pokeDetail[0].defense}</h2>
              <h2>Height: {pokeDetail[0].height} </h2>
              <h2>Weight: {pokeDetail[0].weight} </h2>
              <div>
                {pokeDetail[0].type ? (
                  <h2>
                    Type:
                    {pokeDetail[0].type.map(
                      (e) => " " + e.charAt(0).toUpperCase() + e.slice(1) + " "
                    )}
                  </h2>
                ) : (
                  <h2>
                    Type:
                    {pokeDetail[0].types.map(
                      (e) => " " + e.charAt(0).toUpperCase() + e.slice(1) + " "
                    )}
                  </h2>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
