/**
 * My shop page and shopping cart
 *
 * @format
 */
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

function Shop() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="shopContainer">
        <h1>The Store page!</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>Add Gi</button>
          <button onClick={() => setCount((count) => count + 1)}>
            Add Rashguard
          </button>
          <button>You have {count} items in your cart</button>
        </div>
        <div>
          <Link to="/">Click here to go back Home</Link>
        </div>
      </div>
    </>
  );
}

export default Shop;
