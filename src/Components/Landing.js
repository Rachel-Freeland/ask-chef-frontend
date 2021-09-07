import { Component } from 'react';
import LandingCarousel from './LandingCarousel';
import MissionStatement from './MissionStatement';

import axios from 'axios';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landingRecipes: [],
    };
  }

  render() {
    const componentDidMount = async () => {
      if (this.state.landingRecipes.length === 0) {
        const landingRecipes = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/recipes/random`);
        this.setState({ landingRecipes });
      }
    };

    return (
      <>
        <MissionStatement />
        <LandingCarousel landingRecipes={this.state.landingRecipes} />
      </>
    );
  }
}
