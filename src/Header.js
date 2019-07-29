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
          <Button onClick={() => this.props.onClick()}>Home</Button>
          <Button onClick={() => this.props.onClick()}>Biography</Button>
          <Button onClick={() => this.props.onClick()}>Contact</Button>
          <Button onClick={() => this.props.onClick()}>Resume</Button>
          <Button onClick={() => this.props.onClick()}>Sample Works</Button>
        </div>
      </div>
    );
  }
}
