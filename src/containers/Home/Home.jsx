import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import axios from "axios";
import Employee from "../../components/Employee/Employee";

const Home = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    API.getRandomEmployee().then((results) => {
      console.log("results.data:", results.data);
      setEmployee(results.data.results);
    });
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <span className="h1">Employee Directory</span>
        </div>
      </nav>

      <div className="container">
        {/* <div className="row"> */}
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Cell</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((employee) => (
              <tr key={employee.cell}>
                <td>
                  <img src={employee.picture.thumbnail} />
                </td>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.email}</td>
                <td>{employee.cell}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* </div> */}
      </div>
    </>
  );
};

export default Home;
