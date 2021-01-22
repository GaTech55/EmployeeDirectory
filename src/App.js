import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Calculator from "./components/Calculator";
import Home from "./containers/Home/Home";

// keep the basename below. DO NOT CHANGE
function App() {
  return (
    <Router basename="/">
      <Home />
    </Router>
  );
}

export default App;
