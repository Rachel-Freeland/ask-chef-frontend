import { Component } from 'react';
import LandingCarousel from './LandingCarousel';
import MissionStatement from './MissionStatement';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import axios from 'axios';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landingRecipes: [],
    };
  }

  componentDidMount = async () => {
    if (this.state.landingRecipes.length === 0) {
      const results = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_KEY}&number=5`
      );
      const landingRecipes = results.data.recipes;
      this.setState({ landingRecipes });
    }
  };

  render() {
    return (
      <Container id="landing-container">
        <Row>
          <MissionStatement />
          <LandingCarousel landingRecipes={this.state.landingRecipes} />
        </Row>
      </Container>
    );
  }
}
