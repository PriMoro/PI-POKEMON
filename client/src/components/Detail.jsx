import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";

function Detail(props) {
  const { id } = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const pokeDetail = useSelector((state) => state.pokeDetail);
  console.log(pokeDetail);
  return (
    <div>
      {pokeDetail && (
        <div>
          <div>id={pokeDetail[0].id}</div>
          <div>hp={pokeDetail[0].hp}</div>
          <div>name={pokeDetail[0].name}</div>
          <div>speed={pokeDetail[0].speed}</div>
          <div>attack={pokeDetail[0].attack}</div>
          <div>defense={pokeDetail[0].defense}</div>
          <div>
            <img src={pokeDetail[0].img} alt="img" />
          </div>
          <div>height={pokeDetail[0].height} </div>
          <div>weight={pokeDetail[0].weight} </div>
          <div>type={pokeDetail[0].type.map((e) => e + " ")} </div>
        </div>
      )}
      <Link to="/home">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default Detail;
