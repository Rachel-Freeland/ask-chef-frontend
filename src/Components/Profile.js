import React, { Component } from 'react';
import ProfileCard from './ProfileCard';
// import RecipeRow from './RecipeRow';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

const server = process.env.REACT_APP_BACKEND_URL;

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
    };
  }

  getConfig = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;

    const config = {
      headers: { Authorization: `Bearer ${jwt}` }
    };
    return config;
  }

  async componentDidMount() {
    let recipeUrl = `${server}/recipes/db`;
    let config = await this.getConfig();
    try {
      const response = await axios.get(recipeUrl, config);
      this.setState({ recipes: response.data });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <ProfileCard />
        <Container>
          {/* {this.state.recipes.map((recipe, index) => {
            if(index % 3 === 0) {
              return (
                <RecipeRow isProfileCardRow={true} key={index} recipes={this.state.recipes.slice(index, index + 3)} />
              );
            }
            else return null;
          })} */}
        </Container>
      </div>
    );
  }
}
export default Profile;
