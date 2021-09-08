import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class RecipeCard extends Component {
  componentDidMount() {
    console.log(this.props.recipe, 'IN CARD');
  }

  render() {
    return (
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
              {this.props.recipe.missedIngredients.map((missed) => {
                return <li>{missed.name}</li>;
              })}
            </ul>
          </ListGroupItem>
          <ListGroupItem className="recipe-card-list-item">
            <h3>Instructions:</h3>
            <ol>
              {this.props.recipe.steps.map((step) => {
                return <li>{step}</li>;
              })}
            </ol>
          </ListGroupItem>
        </ListGroup>
        {this.props.isProfileCard ? (
          <Card.Body id="recipe-card-body">
            <Button className="m-2" variant="success">
              Update
            </Button>
            <Button variant="danger">Delete</Button>
          </Card.Body>
        ) : (
          <Card.Body id="recipe-card-body">
            {/* Add saved check */}
            <Button className="m-2" variant="success">
              Save
            </Button>
          </Card.Body>
        )}
      </Card>
    );
  }
}

export default RecipeCard;
