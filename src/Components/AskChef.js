import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import RecipeRow from './RecipeRow';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

export default class AskChef extends Component {
  constructor(props) {
    super(props);

    this.state = { recipes: [] };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const results = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/recipes?ingredients=${e.target.ingredient.value}`);
      console.log(results.data);

      this.setState({recipes: results.data});
    } catch(err) {
      console.log(err);
      this.setState({results: []});
    }
    //temp solution for no returned results
    if(this.state.recipes.length === 0) {
      alert('No results found found the entered ingredients!');
    }
  }

  render() {
    return (
      <div>
        <Card border="dark" id="askchef-card">
          <Card.Header id="askchef-header" style={{ fontSize: '2rem' }}>Recipe Search</Card.Header>
          <Card.Body id="askchef-body" style={{textAlign: 'center'}}>
            <Card.Title className="mb-4" style={{ fontSize: '1.7rem'}} id="askchef-title">Let the chef know what ingredients you have</Card.Title>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label style={{float: 'left', fontSize: '1.3rem'}}>Ingredients</Form.Label>
                <Form.Control name="ingredient" type="text" placeholder="Enter Ingredients, seperated by a comma" />
              </Form.Group>
              <Button variant="success" style={{float: 'left'}} type="submit">Submit</Button>
            </Form>
          </Card.Body>
          <Card.Footer id="askchef-footer"></Card.Footer>
        </Card>
        {this.state.recipes.length > 0 && (
          <Container>
            {this.state.recipes.map((recipe, index) => {
              if(index % 3 === 0) {
                return (
                  <RecipeRow isProfileCardRow={false} key={recipe.id} recipes={this.state.recipes.slice(index, index + 3)} />
                );
              }
              else return null;
            })}
          </Container>
        )}
      </div>
    );
  }
}
