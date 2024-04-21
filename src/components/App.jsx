/** @format */

import { useState } from "react";
import "../styles/App.css";
import Router from "./Router";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router count={count} setCount={setCount} />
    </div>
  );
};

export default App;
