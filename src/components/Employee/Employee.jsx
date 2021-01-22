import React from "react";

const Employee = (props) => {
  return (
    <div className="col-sm-4">
      <img src={props.Employee} alt={props.alt} />
    </div>
  );
};

export default Employee;
