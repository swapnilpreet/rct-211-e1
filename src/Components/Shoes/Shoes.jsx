 

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./shoes.css"
import {
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../../Redux/action";
import axios from "axios";
import { useEffect } from "react";
import ShoeCard from "./ShoeCard/ShoeCard";


const Shoes = () => {

      const dispatch = useDispatch();
      const shoes = useSelector((state) => state.shoes);

      const getshoes = () => {
        dispatch(getShoesRequest());
        axios
          .get("http://localhost:8080/shoes")
          .then((r) => {
            dispatch(getShoesSuccess(r.data));
          })
          .catch((e) => dispatch(getShoesFailure(e)));
      };

      useEffect(() => {
        if (shoes?.length === 0) {
          getshoes();
        }
      }, []);


  return <div className="shoes">
    {/* Map through the shoes list here */}
    {shoes.map((el)=>(<ShoeCard data={el} key={el.id} />))}
  </div>;
};

export default Shoes;
