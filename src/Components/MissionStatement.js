import { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default class MissionStatement extends Component {
  render() {
    return (
      <Col className="p-0" id="mission-col">
        <Card id="mission-card">
          <Card.Body>
            <Card.Title id="mission-card-header">Our Mission</Card.Title>
            <Card.Text id="mission-card-txt">
              Mealtime indecisiveness affects us all, but worry not, the solution to this problem is here.{' '}
              <i>Ask Chef</i> is a website that will expertly calculate meals, that you will definitely enjoy, based on
              the answers to just a few questions. We will help you decide what to cook based on the ingredients in your
              kitchen! Enter your ingredients and voila, multiple recipes will be returned to you.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
