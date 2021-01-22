import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Calculator from "./components/Calculator";

// keep the basename below. DO NOT CHANGE
function App() {
  return (
    <Router basename="/">
      <Calculator />
    </Router>
  );
}

export default App;
