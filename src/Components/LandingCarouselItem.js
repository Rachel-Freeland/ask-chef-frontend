import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class LandingCarouselItem extends Component {
  render() {
    return (
      <Carousel.Item>
        <img src={this.props.recipe.image} alt="recipeImage" />
        <Carousel.Caption>
          <h3>{this.props.recipe.title}</h3>
          <p>Servings: {this.props.recipe.servings}</p>
          <p>Preparation Time: {this.props.recipe.readyInMinutes} minutes</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
}
