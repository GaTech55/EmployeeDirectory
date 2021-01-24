import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Home from "./containers/Home/Home";
import Navbar from "./components/Navbar/Navbar";

// keep the basename below. DO NOT CHANGE
function App() {
  return (
    <Router basename="/">
      <Navbar />
      <Home />
    </Router>
  );
}

export default App;
