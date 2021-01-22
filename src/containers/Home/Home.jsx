import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [employee, setEmployee] = useState([
    {
      gender: "male",
      name: { title: "Mr", first: "Hansjörg", last: "Mittelstädt" },
      location: {
        street: { number: 426, name: "Parkstraße" },
        city: "Lauterstein",
        state: "Sachsen",
        country: "Germany",
        postcode: 26291,
        coordinates: { latitude: "-39.7368", longitude: "-106.1098" },
        timezone: {
          offset: "+8:00",
          description: "Beijing, Perth, Singapore, Hong Kong",
        },
      },
      email: "hansjorg.mittelstadt@example.com",
      login: {
        uuid: "69d0b7c2-d55a-4a01-b040-469e0bf3f78d",
        username: "crazybird368",
        password: "5551212",
        salt: "ZtwQPdfR",
        md5: "217ad0a593b2ae7978fa7c57f4c1a604",
        sha1: "ca8a4ffcce952ef46347876b31f7a25a969080c3",
        sha256:
          "43e04d45893ce44770aa2a72d7ff9d748f6b3007409961988754a0f0b3a438e1",
      },
      dob: { date: "1965-12-28T09:33:03.201Z", age: 56 },
      registered: { date: "2012-08-04T07:17:09.175Z", age: 9 },
      phone: "0079-1945871",
      cell: "0171-5846338",
      id: { name: "", value: null },
      picture: {
        large: "https://randomuser.me/api/portraits/men/91.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/91.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/91.jpg",
      },
      nat: "DE",
    },
  ]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/").then((response) => {
      console.log(response.data.results);
      setEmployee(response.data.results);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {employee.map((employee) => (
          <div className="col-sm-4">
            <img src={employee.picture.medium} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
