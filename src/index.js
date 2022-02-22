import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Header from "./Header";
import Body from "./Body";
import FireBase from "./Components/Firebase";
import { v4 as uuid } from "uuid/";

//https://reactgo.com/deploy-react-app-github-pages/
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      pageName: "Home"
    };
  }

  handleClick(newPage) {
    this.setState({
      pageName: newPage
    });
  }

  saveTodo = (input) => {
    const saveToFirebase = FireBase.firestore();
    saveToFirebase.collection("todos").add({
      id: uuid(),
      item: input
    });
  } 

  render() {
    return (
      <div class="parent">
        <Header onClick={this.handleClick} />
        <Body pageName={this.state.pageName} saveTodo={saveTodo} />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
