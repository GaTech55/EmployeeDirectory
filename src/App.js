import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";

// keep the basename below. DO NOT CHANGE
function App() {
  return (
    <Router basename="/">
      <Navbar />
      <Search />
      <Home />
    </Router>
  );
}

export default App;
