import React, { useState } from "react"


function Item({ name, category }) {
// const {inCart,setinCart} = useState(false)

 //function toggleCart(){
 // setinCart((inCart => !inCart))




  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button   onClick = {console.log("hello")}className="add">Add to cart</button>
    </li>
  );
}

export default Item;
