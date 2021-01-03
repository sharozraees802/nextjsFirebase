import React, { useEffect } from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../Screens/Home/home";
import User from "../Screens/User/user";
import About from "../Screens/About/about";
import firebase from "../../firebase";
import "../../App.css";
const Header = () => {
  useEffect(() => {
    const msg = firebase.messaging();
    msg
      .requestPermission()
      .then(() => {
        return msg.getToken();
      })
      .then((token) => {
        console.log("Token: ", token);
      });
  });

  return (
    <div>
      <Router>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand>
            <Link to="/">Navbar</Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/user">Users</Link>
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={User} path="/user" />
          <Route component={About} Path="/about" />
        </Switch>
      </Router>
    </div>
  );
};

export default Header;
