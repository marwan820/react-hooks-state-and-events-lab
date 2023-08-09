import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  const [darkMode,setDarkMODE] = useState(false)

  function toggle(){

    setDarkMODE((darkMode) => !darkMode)



  }


  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = darkMode ? "App dark" : "App light"

  return (
    <div className= {appClass} >
      <header>
        <h2>Shopster</h2>
        <button onDoubleClick={appClass} onClick={toggle}>{darkMode? "Dark mode": "Light mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
