/** @format */

import { Link } from "react-router-dom";

import "../styles/App.css";
import Carousel from "./Carousel";

function Home() {
  return (
    <>
      <Carousel />
      <h1>Welcome to the Grapple Shop!</h1>
      <div className="card">
        <nav>
          <Link to="/Shop"> Buy stuff here... </Link>
        </nav>
      </div>
    </>
  );
}

export default Home;
