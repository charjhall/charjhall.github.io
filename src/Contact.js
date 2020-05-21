import React from "react";
import "./css/Contact.css";
import Phone from "./img/phone.png";
import Email from "./img/email.png";
import Linkedin from "./img/linkedin.png";
import Github from "./img/github.png";

export default class Contact extends React.Component {
  render() {
    return (
      <div class="home-content-text">
        <h1>Contact</h1>
        <div class="row">
          <div class="column">
            <a href="tel:678-588-6214">
              <img src={Phone} alt="Phone" class="center small" />
            </a>
          </div>
          <div class="column">
            <a href="mailto:jackson.hall@gatech.edu">
              <img src={Email} alt="Email" class="center small" />
            </a>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <a href="https://www.linkedin.com/in/charles-hall-74a73213a/">
              <img src={Linkedin} alt="Linkedin" class="center small" />{" "}
            </a>
          </div>
          <div class="column">
            <a href="https://github.com/charjhall">
              <img src={Github} alt="Github" class="center small" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
