import React, { Component } from 'react';
import ProfileCard from './ProfileCard';
import RecipeRow from './RecipeRow';
import Container from 'react-bootstrap/Container';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  }
  render() {
    return (
      <div>
        <ProfileCard />
        <Container>
          {this.state.recipes.map((recipe, index) => {
            if(index % 3 === 0) {
              return (
                <RecipeRow key={index} recipes={this.state.recipes.slice(index, index + 3)} />
              );
            }
            else return null;
          })}
        </Container>
      </div>
    );
  }
}
export default Profile;
