/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Shop.jsx";
import Home from "./Home.jsx";
import ErrorPage from "./ErrorPage.jsx";

import Navbar from "./Navbar.jsx";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<Shop />} />
          <Route path="*" element={<ErrorPage />} />{" "}
          {/* Remember to set up an error page */}
        </Routes>
      </main>
    </Router>
  );
};

export default AppRouter;
