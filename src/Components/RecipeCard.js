import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import UpdateModal from './UpdateModal';

class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  getConfig = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;
    const config = {
      headers: { 'Authorization': `Bearer ${jwt}` }
    };
    return config;
  }

  onDeleteClick = async () => {
    try {
      const deletedRecipe = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/recipes/${this.props.recipe._id}`);
      this.props.updatePage();
    } catch (err) {
      console.log(err);
    }
  }

  onAddClick = async () => {
    let config = await this.getConfig();

    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/recipes`, this.props.recipe, config);
      alert('Recipe Saved! Happy Cooking!');
    } catch (err) {
      console.log(err);
    }
  }

  onUpdateClick = async (recipeToUpdate) => {
    console.log("test");
    console.log(recipeToUpdate);
    try {
      const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/recipes/${recipeToUpdate._id}`,recipeToUpdate);
      console.log(response.data);
      this.props.updatePage();
      this.toggleModal();

    } catch (err) {
      console.log(err + "Error Message Here");
    }
  }


  render() {
    return (
      <>
        <Card id="recipe-card" className="m-2" style={{ width: '24rem' }}>
          <Card.Title id="recipe-card-title">{this.props.recipe.title}</Card.Title>
          <Card.Img variant="top" src={this.props.recipe.image} />
          <Card.Body>
            <Card.Text id="recipe-card-steps"></Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="recipe-card-list-item">
              <h3>Needed:</h3>
              <ul>
                {this.props.recipe.missedIngredients.map((missed, idx) => {
                  return <li key={idx}>{missed.name}</li>;
                })}
              </ul>
            </ListGroupItem>
            <ListGroupItem className="recipe-card-list-item">
              <h3>Instructions:</h3>
              <ol>
                {this.props.recipe.steps.map((step, idx) => {
                  return <li key={idx}>{step}</li>;
                })}
              </ol>
            </ListGroupItem>
          </ListGroup>
          {this.props.isProfileCard ? (
            <Card.Body id="recipe-card-body">
              <Button onClick={this.toggleModal} className="m-2" variant="success">
                Update
              </Button>
              <Button onClick={this.onDeleteClick} variant="danger">Delete</Button>
            </Card.Body>
          ) : (
            <Card.Body id="recipe-card-body">
              {/* Add saved check */}
              <Button onClick={this.onAddClick} className="m-2" variant="success">
                  Save
              </Button>
            </Card.Body>
          )}
        </Card>
        <UpdateModal
          onUpdateClick={this.onUpdateClick}
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
          recipe={this.props.recipe}
        />
      </>
    );
  }
}

export default withAuth0(RecipeCard);
