/**
 * My shop page and shopping cart
 *
 * @format
 */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Shop.css";

function Shop() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((items) => {
        console.log(items);
        setItems(items);
      })
      .catch((error) => {
        console.error("Error fetching item:", error);
      });
  };

  return (
    <>
      <div className="shopContainer">
        <h1>The Store page!</h1>
        <div className="shopCard">
          <button onClick={() => setCount((count) => count + 1)}>Add Gi</button>
          <button onClick={() => setCount((count) => count + 1)}>
            Add Rashguard
          </button>
          <button>You have {count} items in your cart</button>
          <Link to="/">Click here to go back Home</Link>
        </div>
        <div className="itemContainer">
          {items.map((item, index) => (
            <div className="item" key={index}>
              <h3>{item.title}</h3>
              <p>Price: £{item.price}</p>
              <button onClick={() => setCount((count) => count + 1)}>
                Buy
              </button>
              <img className="itemImage" src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </div>

      {/* Display mapped items below */}
    </>
  );
}

export default Shop;
