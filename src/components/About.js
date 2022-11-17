import React from "react";
import { Listitem } from "./Listitem";
import { useState, useContext } from "react";
import { Appcontext } from "../App";

export const About = () => {
  // const getLocalItems = () => {
  //   let list = localStorage.getItem("items");
  //   // console.log(list);
  //   if (list) {
  //     return JSON.parse(localStorage.getItem("items"));
  //   } else {
  //     return [];
  //   }
  // };
  // const [cart, addItemToCart] = useState(getLocalItems);
  const { cart, addItemToCart } = useContext(Appcontext);
  return (
    <div>
      <div>About</div>
      <h1>Cart Items:</h1>
      {cart.map((item, i) => (
        <Listitem key={i} name={item}></Listitem>
      ))}
    </div>
  );
};
