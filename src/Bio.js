import React from "react";
import Guitar from "./img/guitar.JPG";
import Fam from "./img/familyPicture.png";
import Agile from "./img/agile.png";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import MatrixDodge from './img/matrix-dodge.gif'
import "./css/Bio.css"
import { Typography } from '@mui/material';
import { margin } from "@mui/system";

export default class Bio extends React.Component {
  render() {
    return (

      <Container maxWidth="md">
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 12">
            <h1>Bio</h1>
          </Box>
          <Box gridColumn="span 12">
              <Typography>
                I am from Covington, GA, and come from a crazy but incredible family
                of six. I am currently in my fourth year enrolled at the Georgia
                Institute of Technology, pursuing a Bachelor of Science in Computer
                Science.
              </Typography>
          </Box>
          <Box gridColumn="span 12">
            <img src={Fam} alt="Family" />
          </Box>
          <Box gridColumn="span 12" sx={{marginTop: "100px"}}>
            <Typography variant="body1">
              In the realm of computer science, I love to build scalable
              applications from the ground up, using agile style development. I am
              also into full stack development, from the database to the user
              interface, mainly because I love engaging different parts of my
              brain. I also enjoy visualizing data via d3 and javascript, allowing
              people to easily digest data in a way that is both intuitive and
              informative.
            </Typography>
          </Box>
          <Box gridColumn="span 12">
            <img src={MatrixDodge} alt="Agile" class="center small" margin-bottom="0px" />
          </Box>
          <Box gridColumn="span 12">
            <Typography variant="body1" textAlign="center">
              Stay agile out there.
            </Typography>
          </Box>
          <Box gridColumn="span 7" sx={{marginTop: "100px"}}>
            <Typography>
              Outside of the realm of computer science, I enjoy playing guitar,
              playing ultimate frisbee, learning spanish, hiking in the outdoors,
              hanging out with friends, volunteering with kids, and having deep
              conversations.
            </Typography>
          </Box>
          <Box gridColumn="span 5" sx={{marginTop: "100px"}}>
            <img src={Guitar} alt="Guitar" class="center small" />
          </Box>
        </Box>
      </Container>
    );
  }
}
