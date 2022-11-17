import React from "react";
import { Listitem } from "./Listitem";
import { useState, useContext } from "react";
import { Appcontext } from "../App";

export const Contact = () => {
  // const getLocalItems = () => {
  //   let list = localStorage.getItem("items");
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
      <div>Contact</div>
      <h1>Cart Items:</h1>
      {cart.map((item, i) => (
        <Listitem key={i} name={item}></Listitem>
      ))}
    </div>
  );
};
