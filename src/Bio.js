import React from "react";
import Guitar from "./img/guitar.JPG";
export default class Bio extends React.Component {
  render() {
    return (
      <div class="home-content">
        <div class="home-content-text">
          <h1>Bio</h1>
          <h2>
            I am currently enrolled at the Georgia Institute of Technology. I
            enjoy playing guitar, playing ultimate frisbee, learning spanish,
            the outdoors, hanging out with friends, and deep conversations.
          </h2>
        </div>
        <img src={Guitar} alt="Guitar" class="center small" />
      </div>
    );
  }
}
