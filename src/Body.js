import React from "react";
import Home from "./Home";

export default class Body extends React.Component {
  render() {
    if (this.props.value == "Home") {
      return <Home />;
    } else if (this.props.value == "Bio") {
      return <h1>Bio</h1>;
    }
  }
}
