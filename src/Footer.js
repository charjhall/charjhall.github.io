import React from "react";
import "./css/Footer.css";
import Email from "./img/new-email.png";
import Linkedin from "./img/linkedin.png";
import Github from "./img/github-square.png";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Container maxWidth="md" sx={{ backgroundColor: 'primary.dark' }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', justifyContent: 'space-around' }}>
            <Box display={'flex'} justifyContent={'center'} sx={{ p: 2}}>
              <a href="mailto:jacksonhall333@gmail.com">
                <img src={Email} alt="Email" class="center small" />
              </a>
            </Box>
            <Box display={'flex'} justifyContent={'center'} sx={{ p: 2}}>
            <a href="https://www.linkedin.com/in/charles-hall-74a73213a/">
              <img src={Linkedin} alt="Linkedin" class="center small" />{" "}  
            </a>
            </Box>
            <Box display={'flex'} justifyContent={'center'} sx={{ p: 2}}>
              <a href="https://github.com/charjhall">
                <img src={Github} alt="Github" class="center small" />
              </a>
            </Box>
          </Box>
        </Container>
      </Container>
    );
  }
}
