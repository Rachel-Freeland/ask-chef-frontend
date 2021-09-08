import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Logoutbutton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <button onClick={() => {
      logout({ returnTo: window.location.origin });
    }}>Logout</button>
  );
}

export default Logoutbutton;
