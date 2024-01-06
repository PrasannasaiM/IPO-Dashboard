import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationForm from './Components/RegistrationForm';
import LoginForm from './Components/LoginForm';

const App = () => {
  return (
    <Router>
      <div>
        <h1>User Authentication</h1>
        <Router>
          {/* Route for Registration */}
          <Route exact path="/register" component={RegistrationForm} />

          {/* Route for Login */}
          <Route exact path="/login" component={LoginForm} />

          {/* Default Route or Redirect to Login */}
          <Route render={() => <Redirect to="/login" />} />
        </Router>
      </div>
    </Router>
  );
};

export default App;
