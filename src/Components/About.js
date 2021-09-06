import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import antoine from '../img/antoine.jpg';
import rachel from '../img/rachel.jpg';
import patrick from '../img/patrick.png';
import alex from '../img/alex.jpg';
import { Container } from 'react-bootstrap';

class About extends Component {
  render() {
    return (
      <Container style={{ maxWidth: '35vw' }}>
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={antoine} alt="antoine" />
            <Carousel.Caption>
              <h3>Antoine Charette</h3>
              <p></p>
              <p>LinkedIn: https://www.linkedin.com/in/antoinecharette/</p>
              <p>GitHub: https://github.com/DevAOC</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={rachel} alt="antoine" />
            <Carousel.Caption>
              <h3>Rachel Freeland</h3>
              <p>
                I am an analytical, solution oriented and, innovative professional with 15+ years of diverse experience
                in fast-paced operational environments. I have a background as a registered respiratory therapist with a
                neonatal/pediatrics specialty certification and recently followed my passion for information and cyber
                security by entering a Bachelors of Applied Science in IT Network Administration and Security program,
                where I graduated in June 2020. I am currently rounding out my future career by becoming a full-stack
                Java developer. I plan to combine these 2 fields if possible in a career either securing the IOT or
                SecDevOps or possibly writing software for a medical company.
              </p>
              <p>LinkedIn: https://www.linkedin.com/in/rachel-freeland/</p>
              <p>GitHub: https://github.com/Rachel-Freeland</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={patrick} alt="antoine" />
            <Carousel.Caption>
              <h3>Patrick Laurion</h3>
              <p></p>
              <p>LinkedIn: https://www.linkedin.com/in/patricklaurion1989/</p>
              <p>GitHub: </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={alex} alt="antoine" />
            <Carousel.Caption>
              <h3>Alexander Beers</h3>
              <p>
                I am a software developer from the San Francisco bay area. In my free time I enjoy fine dining, gaming,
                and keeping up with bay area sports teams.
              </p>
              <p>LinkedIn: https://www.linkedin.com/in/alexander-r-beers/</p>
              <p>GitHub: https://github.com/Beers15</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default About;
