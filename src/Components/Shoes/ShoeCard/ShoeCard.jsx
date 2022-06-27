import React from "react";
import "./shoeCard.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  updateShoeCountFailure,
  updateShoeCountRequest,
  updateShoeCountSuccess,
} from "../../../Redux/action";

const ShoeCard = ({ data }) => {
  console.log(data);
  const shoeId = null;
  const [count, setCount] = useState(data.cart_quantity);
  const dispatch = useDispatch();

  const updateCount = (id, count) => {
    dispatch(updateShoeCountRequest());
    axios
      .patch(`http://localhost:8080/shoes/${id}`, { cart_quantity: count })
      .then((r) => dispatch(updateShoeCountSuccess(r.data)))
      .catch((e) => dispatch(updateShoeCountFailure(e)));
  };

  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`} className="cardd">
      <img
        className="imgg"
        data-cy="shoe-card-image"
        src={data.image}
        alt="shoe"
      />
      <div>
        <div data-cy="shoe-name">{data.name}</div>
        <div className="cart">
          In Cart:
          <div data-cy="shoe-count">{count}</div>
          <div>
            <button
              data-cy="increment-shoe-count-button"
              onClick={() => {
                setCount(count + 1);
                updateCount(data.id, count + 1);
              }}
            >
              +
            </button>
            <button
              data-cy="decrement-shoe-count-button"
              disabled={count <= 0}
              onClick={() => {
                setCount(count - 1);
                updateCount(data.id, count - 1);
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;