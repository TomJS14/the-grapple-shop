/** @format */

import { Link } from "react-router-dom";

import "../styles/App.css";

function Home() {
  return (
    <>
      <div className="main-content">
        <a href="" target="_blank">
          <img className="logo" alt="Logo will go here" />
        </a>
      </div>
      <h1>Welcome to the Grapple Shop!</h1>
      <div className="card">
        <nav>
          <Link to="/Shop">Go to the shop</Link>
        </nav>
      </div>
      <p className="read-the-docs">Buy my shit</p>
    </>
  );
}

export default Home;
