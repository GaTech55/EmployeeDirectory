import React from "react";

const Navbar = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#02075d",
          borderBottomWidth: 10,
          borderBottomColor: "red",
          borderBottomStyle: "solid",
          padding: 30,
        }}
      >
        <div
          className="container"
          style={{
            color: "white",
            textAlign: "center",
            fontFamily: "Arial",
          }}
        >
          <h1>Employee Directory</h1>
          <h4>
            Click on the column headers to filter by heading or use the search
            box to narrow your results.
          </h4>
        </div>
      </div>
    </>
  );
};

export default Navbar;
