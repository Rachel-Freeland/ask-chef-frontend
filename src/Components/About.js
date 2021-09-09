import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import antoine from '../img/antoine2.png';
import rachel from '../img/rachel2.png';
import patrick from '../img/patrick2.png';
import alex from '../img/alex2.png';
import blank from '../img/blank.png';
import Container from 'react-bootstrap/Container';

export default class About extends Component {
  render() {
    return (
      <Container id="about-carousel-container">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={blank} alt="carousel-backing" />
            <Carousel.Caption>
              <img className="about" src={antoine} alt="antoine" />
              <h3>Antoine Charette</h3>
              <article>
                <p>
                  I am an ex-chef transitioning into the tech industry. Ultimately, it was a combination of my interest
                  in computers and coronavirus lockdowns that made me change careers. I would love to work for a company
                  that fulfills my need to produce tech that will positively impact peoples’ lives. I can bring my
                  previous experience, and skills in organization, time management, customer obsession, and detail
                  orientation to make this dream a reality.
                </p>
                <a className="about" href="https://www.linkedin.com/in/antoinecharette/">
                  LinkedIn
                </a>
                <a className="about" href="https://github.com/DevAOC">
                  GitHub
                </a>
              </article>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={blank} alt="carousel-backing" />
            <Carousel.Caption>
              <img className="about" src={rachel} alt="rachel" />
              <h3>Rachel Freeland</h3>
              <article>
                <p>
                  I am an analytical, solution oriented and, innovative professional with 15+ years of diverse
                  experience in fast-paced operational environments. I have a background as a registered respiratory
                  therapist with a neonatal/pediatrics specialty certification and recently followed my passion for
                  information and cyber security by entering a Bachelors of Applied Science in IT Network Administration
                  and Security program, where I graduated in June 2020. I am currently rounding out my future career by
                  becoming a full-stack Java developer.
                </p>
                <a className="about" href="https://www.linkedin.com/in/rachel-freeland/">
                  LinkedIn
                </a>
                <a className="about" href="https://github.com/Rachel-Freeland">
                  GitHub
                </a>
              </article>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={blank} alt="carousel-backing" />
            <Carousel.Caption>
              <img className="about" src={patrick} alt="patrick" />
              <h3>Patrick Laurion</h3>
              <article>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue condimentum nulla sed dapibus. Sed
                  tempor molestie velit, vitae fringilla enim elementum vel. Aliquam a mollis turpis, a iaculis odio.
                  Morbi tempus semper purus, non blandit nunc facilisis in. Duis a felis tellus. In eget posuere risus.
                  Phasellus sollicitudin ut leo in eleifend. Etiam nibh diam, semper nec risus at, ornare dapibus felis.
                  Cras sapien velit, convallis in porttitor vel, consequat in est. Pellentesque est nisl, eleifend id
                  justo non, ornare pulvinar massa. Fusce molestie eu elit eu lobortis.
                </p>
                <a className="about" href="https://www.linkedin.com/in/patricklaurion1989/">
                  LinkedIn
                </a>
                <a className="about" href="https://github.com/plaurion1989">
                  GitHub
                </a>
              </article>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={blank} alt="carousel-backing" />
            <Carousel.Caption>
              <img className="about" src={alex} alt="alex" />
              <h3>Alexander Beers</h3>
              <article>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue condimentum nulla sed dapibus. Sed
                  tempor molestie velit, vitae fringilla enim elementum vel. Aliquam a mollis turpis, a iaculis odio.
                  Morbi tempus semper purus, non blandit nunc facilisis in. Duis a felis tellus. In eget posuere risus.
                  Phasellus sollicitudin ut leo in eleifend. Etiam nibh diam, semper nec risus at, ornare dapibus felis.
                  Cras sapien velit, convallis in porttitor vel, consequat in est. Pellentesque est nisl, eleifend id
                  justo non, ornare pulvinar massa. Fusce molestie eu elit eu lobortis.
                </p>
                <a className="about" href="https://www.linkedin.com/in/alexander-r-beers/">
                  LinkedIn
                </a>
                <a className="about" href="https://github.com/Beers15">
                  GitHub
                </a>
              </article>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}
