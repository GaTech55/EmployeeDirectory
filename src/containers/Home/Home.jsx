import React, { useEffect, useState } from "react";
import axios from "axios";
import Employee from "../../components/Employee/Employee";

const Home = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    alert("Welcome user!");
    axios.get("https://randomuser.me/api/?results=10").then((response) => {
      console.log(response.data.results);
      setEmployee(response.data.results);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {employee.map((employee) => (
          <Employee
            employeeUrl={employee.picture.large}
            key={employee.id.value}
            alt={employee.name.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
