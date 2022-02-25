import React from "react";
import Guitar from "./img/guitar.JPG";
import Fam from "./img/familyPicture.JPG";
import Agile from "./img/agile.png";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default class Bio extends React.Component {
  render() {
    return (

      <Container maxWidth="md">
        <h1>Bio</h1>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 7">
              <h2>
                I am from Covington, GA, and come from a crazy but incredible family
                of six. I am currently in my fourth year enrolled at the Georgia
                Institute of Technology, pursuing a Bachelor of Science in Computer
                Science.
              </h2>
          </Box>
          <Box gridColumn="span 5">
            <img src={Fam} alt="Family" class="center" />
          </Box>
          <Box gridColumn="span 7">
            <h2>
              In the realm of computer science, I love to build scalable
              applications from the ground up, using agile style development. I am
              also into full stack development, from the database to the user
              interface, mainly because I love engaging different parts of my
              brain. I also enjoy visualizing data via d3 and javascript, allowing
              people to easily digest data in a way that is both intuitive and
              informative.
            </h2>
          </Box>
          <Box gridColumn="span 5">
            <img src={Agile} alt="Agile" class="center small" />
          </Box>
          <Box gridColumn="span 7">
            <h2>
              Outside of the realm of computer science, I enjoy playing guitar,
              playing ultimate frisbee, learning spanish, hiking in the outdoors,
              hanging out with friends, volunteering with kids, and having deep
              conversations.
            </h2>
          </Box>
          <Box gridColumn="span 5">
            <img src={Guitar} alt="Guitar" class="center small" />
          </Box>
        </Box>
      </Container>
    );
  }
}
