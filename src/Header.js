import React from "react";
import Button from "react-bootstrap/Button";
import "./css/Header.css";
import logo from "./img/logo.png";

export default class Header extends React.Component {
  render() {
    return (
      <div class="nav-menu">
        <img src={logo} alt="Logo" class="logo" />
        <div class="inner-menu">
          <Button onClick={() => this.props.onClick("Home")}>Home</Button>
          <Button onClick={() => this.props.onClick("Bio")}>Bio</Button>
          <Button onClick={() => this.props.onClick("Contact")}>Contact</Button>
          <Button onClick={() => this.props.onClick("Resume")}>Resume</Button>
          <Button onClick={() => this.props.onClick("Meal Prep")}>Meal Prep</Button>
          <Button onClick={() => this.props.onClick("Todo List")}>Todo List</Button>
        </div>
      </div>
    );
  }
}
