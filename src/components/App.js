import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

console.log(itemData)
function App() {

  
  const [lightMode,setlightMODE] = useState(true)



  
  

  function toggle(){

    setlightMODE((lightMode) => !lightMode)
    

    


  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const className = !lightMode ? "App dark" : "App light"

  return (
    <div  className={className} >
      <header>
        <h2>Shopster</h2>
        {/* <button    onClick={toggle} >{lightMode? "dark mode": "light mode"}</button> */}
        <button onClick={toggle}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
