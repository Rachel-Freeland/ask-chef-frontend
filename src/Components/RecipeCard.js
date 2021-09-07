import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class RecipeCard extends Component {
  render() {
    return (
      <Card id="recipe-card" className="m-3" style={{ width: '18rem' }}>
        <Card.Title id="recipe-card-title" >Recipe Title</Card.Title>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Text id="recipe-card-steps">
            Recipe Steps here
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="recipe-card-listitem">Ingredients list user entered</ListGroupItem>
          <ListGroupItem className="recipe-card-listitem">Grocery List</ListGroupItem>
        </ListGroup>
        <Card.Body id="recipe-card-body">
          <Button className="m-2" variant="success">Update</Button>
          <Button variant="danger">Delete</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default RecipeCard;
