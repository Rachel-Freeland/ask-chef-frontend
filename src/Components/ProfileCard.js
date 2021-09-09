import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { withAuth0 } from '@auth0/auth0-react';

class ProfileCard extends Component {
  render() {
    return (
      <Card border="dark" id="profile-card">
        <Card.Header id="profile-header" style={{ fontSize: '2rem' }}>
          Profile Info
        </Card.Header>
        <Card.Img id="profile-img" variant="top" src={this.props.auth0.user.picture} alt="user" />
        <Card.Body id="profile-body" style={{ textAlign: 'center' }}>
          <Card.Title id="profile-title">User: {this.props.auth0.user.name}</Card.Title>
        </Card.Body>
        <Card.Footer id="profile-footer">Email address: {this.props.auth0.user.email}</Card.Footer>
      </Card>
    );
  }
}

export default withAuth0(ProfileCard);
