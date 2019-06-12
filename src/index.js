import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import headshot from "./img/professional_headshot.jpeg";
import Header from "./Header";

class Home extends React.Component {
  render() {
    return (
      <div class="parent">
        <Header />
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
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
