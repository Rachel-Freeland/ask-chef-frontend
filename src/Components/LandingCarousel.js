import { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

export default class LandingCarousel extends Component {
  render() {
    return (
      <Col className="p-0">
        <Carousel controls={false}>
          {this.props.landingRecipes.map((recipe) => {
            return (
              <Carousel.Item key={recipe.id}>
                <img id="landing-image" src={recipe.image} alt="recipeImage" />
                <Carousel.Caption id="landing-carousel-caption">
                  <h3>{recipe.title}</h3>
                  <p id="landing-servings">Servings: {recipe.servings}</p>
                  <p>Preparation Time: {recipe.readyInMinutes} minutes</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Col>
    );
  }
}
