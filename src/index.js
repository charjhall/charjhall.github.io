import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Header from "./Header";
import Body from "./Body";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: "Home"
    };
  }

  handleClick() {
    alert("woah");
    //alert(pageName);
    //this.setState({ pageName: pageName });
  }

  render() {
    return (
      <div class="parent">
        <Header onClick={() => alert("woah")} />
        <Body pageName={this.state.pageName} />
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
