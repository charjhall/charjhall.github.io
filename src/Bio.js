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
            of six. I am currently enrolled at the Georgia Institute of
            Technology, in my fourth year pursuing a bachelor in computer
            science.
          </h2>
          <img src={Fam} alt="Family" class="center small" />

          <h2>
            In the realm of computer science, I love to build scalable
            applications from the ground up, using agile style development. I am
            also into full stack development, from the database to the user
            interface, I am passionate about all parts of development and
            engaging different parts of my brain. I also enjoy visualizing data
            via d3 and javascript, allowing people to easily digest data in a
            way that is intuitive.
          </h2>
          <img src={Agile} alt="Agile" class="center small" />

          <h2>
            Outside of the tech world, I enjoy playing guitar, playing ultimate
            frisbee, learning spanish, the outdoors, hanging out with friends,
            volunteering with kids, and deep conversations.
          </h2>
        </div>
        <img src={Guitar} alt="Guitar" class="center small" />
      </div>
    );
  }
}
