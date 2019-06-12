import React from "react";
import Button from "react-bootstrap/Button";
import "./Header.css";
import logo from "./img/logo.png";

export default class Header extends React.Component {
  render() {
    return (
      <div class="nav-menu">
        <img src={logo} alt="Logo" class="logo" />
        <div class="inner-menu">
          <Button>Home</Button>
          <Button>Biography</Button>
          <Button>Contact</Button>
          <Button>Resume</Button>
          <Button>Sample Works</Button>
        </div>
      </div>
    );
  }
}
