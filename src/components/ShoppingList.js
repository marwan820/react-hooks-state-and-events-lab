import { useState } from "react";
import React from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // elements
const [selectedCategory,setselectedCategory] = useState("All")
const categoryFilter = items.filter((item) => item.category === selectedCategory)

const renderCategory =  selectedCategory === "All"? items.map((item) => {
  return(
  <Item key={item.id} name={item.name} category={item.category} />)}) : categoryFilter.map((item) => {
  return(
  <Item key={item.id} name={item.name} category={item.category} />)})


  function changeSelect(event){
 // console.log()
setselectedCategory((selectedCategory) => selectedCategory = event.target.value)}

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select  onChange={changeSelect} name="filter">
          <option  defaultValue="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
      {renderCategory}
      </ul>
    </div>
  );
}

export default ShoppingList;
