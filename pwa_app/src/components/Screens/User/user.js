import React, { useState, useEffect } from "react";

import { Table } from "react-bootstrap";

const User = () => {
  const [data, SetData] = useState([]);
  const [mode, setMode] = useState("online");

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => {
        res.json().then((result) => {
          SetData(result);
          localStorage.setItem("users", JSON.stringify(result));
        });
      })
      .catch(() => {
        let collection = localStorage.getItem("users");
        SetData(JSON.parse(collection));
        setMode("offline");
        // alert("please check internet connect");
      });
  }, []);

  return (
    <div>
      <div>
        {mode === "offline" ? (
          <div
            style={{ textAlign: "center" }}
            className="alert alert-warning"
            role="alert"
          >
            <h4>you are in offline mode or some issue with coonection</h4>
          </div>
        ) : null}
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Address</th>
            <th>phone</th>
            <th>website</th>
            <th>company</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>
                street: {item.address.street}, suite: {item.address.suite},
                city: {item.address.city}, zipcode: {item.address.zipcode}
              </td>
              <td>{item.phone}</td>
              <td>{item.website}</td>
              <td>
                Name: {item.company.name}, catchPhrase:{" "}
                {item.company.catchPhrase}, bs: {item.company.bs}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default User;
