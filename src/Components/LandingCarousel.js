import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import LandingCarouselItem from './LandingCarouselItem';

export default class LandingCarousel extends Component {
  render() {
    return (
      <Carousel>
        {this.props.landingRecipes.map((recipe) => {
          <LandingCarouselItem recipe={recipe} />;
        })}
      </Carousel>
    );
  }
}
