import React from "react";
import HomePage from "./HomePage";
import Bio from "./Bio";
import Contact from "./Contact";
import Resume from "./Resume";
import MealPrep from "./MealPrep";

export default class Body extends React.Component {
  render() {
    if (this.props.pageName === "Home") {
      return <HomePage />;
    } else if (this.props.pageName === "Bio") {
      return <Bio />;
    } else if (this.props.pageName === "Contact") {
      return <Contact />;
    } else if (this.props.pageName === "Resume") {
      return <Resume />;
    } else if (this.props.pageName === "Meal Prep") {
      return <MealPrep />;
    }
  }
}
