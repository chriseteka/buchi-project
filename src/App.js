import React from 'react';
import {SignIn, Landing, Dashboard
  } from "./pages";
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Switch>
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/" component={Landing} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
export default App;
