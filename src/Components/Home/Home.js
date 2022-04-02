import React, { useState } from "react";
import useTShirts from "../../Hooks/useTShirts";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

const Home = () => {
  const [tshirts, setTshirts] = useTShirts();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (selectItem) => {
    const exists = cart.find((tShirt) => tShirt._id === selectItem._id);
    if (!exists) {
      const newCart = [...cart, selectItem];
      setCart(newCart);
    }
    else{
      alert('item already added')
    }
  };

  const handleRemoveFromCart = (selectItem) => {
    const rest = cart.filter((tShirt) => tShirt._id !== selectItem._id);
    setCart(rest);
  };

  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tshirts.map((tShirt) => (
          <TShirt
            tShirt={tShirt}
            key={tShirt._id}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
