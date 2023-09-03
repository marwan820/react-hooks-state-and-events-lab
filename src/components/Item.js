import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setinCart] = useState(false);

  function toggleCart() {
    setinCart((inCart) => !inCart);
  }

  const cartMessage = inCart ? "Remove from art" : "Add to Cart";

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>
        {cartMessage}
      </button>
    </li>
  );
}

export default Item;
