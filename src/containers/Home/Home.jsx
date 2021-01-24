import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import Employee from "../../components/Employee/Employee";
import Search from "../../components/Search/Search";

const Home = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    API.getRandomEmployee().then((results) => {
      console.log("results.data:", results.data);
      setEmployee(results.data.results);
    });
  }, []);

  const handleSortName = (event) => {
    const sortEmployee = [...employee];
    const sortedEmployees = sortEmployee.sort((a, b) =>
      a.name.first > b.name.first ? 1 : -1
    );
    setEmployee(sortedEmployees);
  };

    const handleSearchName = (event) => {
        console.log(event.target.value);
        const filter = event.target.value;
        const listOfItems = this.state.employees.filter((response) => {
            let values = Object.values(response).join("").toLowerCase();
            return values.indexOf(
                filterName.toLowerCase())!== -1;
            )
        })
    }

  return (
    <>
      <div className="container">
        <Search onChange={handleFilterName} />
        {/* <div className="row"> */}
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">
                <button onClick={handleSortName}>First Name</button>
              </th>
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
