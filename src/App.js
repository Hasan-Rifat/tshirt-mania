import { Route, Routes } from "react-router-dom";
import "./App.css";
import Grandpa from "./Components/Grandpa/Grandpa";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import OrdersReview from "./Components/OrdersReview/OrdersReview";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/orderreview"
          element={<OrdersReview></OrdersReview>}
        ></Route>
        <Route path="/grandpa" element={<Grandpa></Grandpa>}></Route>
      </Routes>
    </div>
  );
}

export default App;
