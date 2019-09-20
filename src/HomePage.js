import React from "react";
import headshot from "./img/professional_headshot.png";
import "./css/HomePage.css";

export default class HomePage extends React.Component {
  render() {
    return (
      <div class="home-content">
        <div class="home-content-text">
          <h1>Hi, I'm Jackson Hall</h1>
          <h2>
            I quest for knowledge that I may have an intelligent conversation
            with every person I meet.
          </h2>
        </div>
        <img src={headshot} alt="Headshot" class="center small" />
      </div>
    );
  }
}
