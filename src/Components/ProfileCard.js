import { Component } from 'react';
import Card from 'react-bootstrap/Card';

class ProfileCard extends Component {
  render() {
    return (
      <Card border="dark" id="profile-card">
        <Card.Header id="profile-header" style={{ fontSize: '2rem' }}>Profile Info</Card.Header>
        <Card.Img id="profile-img" variant="top" src={''} alt="user" />
        <Card.Body id="profile-body" style={{textAlign: 'center'}}>
          <Card.Title id="profile-title">Johnny Example</Card.Title>
        </Card.Body>
        <Card.Footer id="profile-footer">johnnyExample@gmail.com</Card.Footer>
      </Card>
    );
  }
}

export default ProfileCard;
