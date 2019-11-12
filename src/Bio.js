import React from "react";
import Guitar from "./img/guitar.JPG";
import Fam from "./img/familyPicture.JPG";
import Agile from "./img/agile.png";
export default class Bio extends React.Component {
  render() {
    return (
      <div class="home-content">
        <div class="home-content-text">
          <h1>Bio</h1>
          <h2>
            I am from Covington, GA, and come from a crazy but incredible family
            of six. I am currently in my fourth year enrolled at the Georgia
            Institute of Technology, pursuing a Bachelor of Science in Computer
            Science.
          </h2>
          <img src={Fam} alt="Family" class="center small" />

          <h2>
            In the realm of computer science, I love to build scalable
            applications from the ground up, using agile style development. I am
            also into full stack development, from the database to the user
            interface, mainly because I love engaging different parts of my
            brain. I also enjoy visualizing data via d3 and javascript, allowing
            people to easily digest data in a way that is both intuitive and
            informative.
          </h2>
          <img src={Agile} alt="Agile" class="center small" />

          <h2>
            Outside of the realm of computer science, I enjoy playing guitar,
            playing ultimate frisbee, learning spanish, hiking in the outdoors,
            hanging out with friends, volunteering with kids, and having deep
            conversations.
          </h2>
        </div>
        <img src={Guitar} alt="Guitar" class="center small" />
      </div>
    );
  }
}
