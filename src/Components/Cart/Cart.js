import "./Cart.css";
import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  // conditional rendering options
  // 1. element variable
  // 2. ternary operator condition ? value : value
  // 3.&& operator (shorthand)
  // 4. || if condition not true

  let command;
  if (cart.length === 0) {
    command = (
      <div>
        <h5>please add at least one item !!!</h5>
      </div>
    );
  } else if (cart.length === 1) {
    command = <div>Please add more...</div>;
  } else {
    command = <p>thanks for adding item</p>;
  }

  return (
    <div>
      <h2>items selected {cart.length}</h2>

      {cart.map((tShirt) => (
        <p>
          {tShirt.name}
          <button onClick={() => handleRemoveFromCart(tShirt)}>x</button>
        </p>
      ))}

      {
        cart.length === 0 || (
          <div className="orange">
            <p>YAY! You Are Buying</p>
          </div>
        )
      }

      {cart.length === 3 && (
        <div className="orange">
          <h3>Trigonal</h3>
          <p>Tin jon ke ki gift diba</p>
        </div>
      )}

      {command}

      {cart.length !== 4 ? <p>keep adding</p> : <button>Remove all</button>}
    </div>
  );
};

export default Cart;
