// this code came from the Auth0 documentation, https://auth0.com/docs/quickstart/spa/react?download=true

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button className="m-2" variant="success" onClick={() => loginWithRedirect()}>
      Log In
    </Button>
  );
};

export default LoginButton;
