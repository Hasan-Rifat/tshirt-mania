import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const RingContext = createContext("ring");

const Grandpa = () => {
  const [house, setHouse] = useState(1);

  const ornaments = "Diamon Ring";

  const handleBuyAHouse = () => {
    const newCount = house + 1;
    setHouse(newCount);
  };
  return (
    <RingContext.Provider value={ornaments}>
      <div className="grandpa">
        <h4>grandpa</h4>
        <p>
          house: {house} <button onClick={handleBuyAHouse}>Buy a House</button>
        </p>
        <div style={{ display: "flex" }}>
          <Father house={house} ornaments={ornaments}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </div>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
