import React from "react";
import { useState, useContext } from "react";
import { useEffect } from "react";
import { Listitem } from "./Listitem";
import { Appcontext } from "../App";

export const Home = () => {
  // const getLocalItems = () => {
  //   let list = localStorage.getItem("items");
  //   if (list) {
  //     return JSON.parse(localStorage.getItem("items"));
  //   } else {
  //     return [];
  //   }
  // };
  const [item, setItem] = useState("");
  // const [cart, addItemToCart] = useState(getLocalItems);

  // useEffect(() => {
  //   console.log("SAVE");
  //   localStorage.setItem("items", JSON.stringify(cart));
  // }, [cart]);

  // useEffect(() => {
  //   console.log("LOAD");
  //   const items = JSON.parse(localStorage.getItem("items"));
  //   // if (cart) {
  //   //   addItemToCart(cart);
  //   // }
  // }, []);

  const { cart, addItemToCart } = useContext(Appcontext);
  const updateText = (e) => {
    setItem(e.target.value);
  };
  const addtoCart = (e) => {
    e.preventDefault();
    const temp = cart;
    temp.push(item);
    addItemToCart(temp);
    setItem("");
    localStorage.setItem("items", JSON.stringify(cart));
    // window.localStorage.setItem("savedCart", JSON.stringify(cart));
  };

  return (
    <div onSubmit={addtoCart}>
      <div>Home Page</div>
      <form>
        <input type="text" onChange={updateText} value={item}></input>
        <button type="submit">Add to cart</button>
      </form>
      <h1>Cart Items:</h1>
      {cart.map((item, i) => (
        <Listitem key={i} name={item}></Listitem>
      ))}
    </div>
  );
};
