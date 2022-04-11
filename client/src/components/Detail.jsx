import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const pokeDetail = useSelector((state) => state.pokeDetail);

  React.useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);
  //console.log(Object.entries(pokeDetail));

  return (
    <div>
      <h1>{id} </h1>
      {Object.entries(pokeDetail).length && (
        <div>
          <h1>DETAIL</h1>
          <h1>name= {pokeDetail[0].name} </h1>
          <h3>hp= {pokeDetail[0].hp}</h3>
          <h3>speed= {pokeDetail[0].speed}</h3>
          <h3>attack= {pokeDetail[0].attack}</h3>
          <h3>defense= {pokeDetail[0].defense}</h3>
          <div>
            <img src={pokeDetail[0].img} alt="img" />
          </div>
          <h3>height= {pokeDetail[0].height} </h3>
          <h3>weight= {pokeDetail[0].weight} </h3>
          <div>
            {pokeDetail[0].type ? (
              <h2>type= {pokeDetail[0].type.map((e) => e + " ")} </h2>
            ) : (
              <h2>type= {pokeDetail[0].types.join(" ")} </h2>
            )}
          </div>
        </div>
      )}
      <Link to="/home">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default Detail;
