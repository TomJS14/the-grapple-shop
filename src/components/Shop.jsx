/**
 * My shop page and shopping cart
 *
 * @format
 */
import { useState } from "react";
import "../styles/App.css";

function Shop() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="" target="_blank">
          <img className="logo" alt="Logo will go here" />
        </a>
      </div>
      <h1>The Store page!</h1>
      <div className="card"></div>
      <button onClick={() => setCount((count) => count + 1)}>
        Buy my shit
      </button>
      <button>You have {count} items in your cart</button>
    </>
  );
}

export default Shop;
