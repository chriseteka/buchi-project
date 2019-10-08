import React from 'react';
import {SignIn, Landing, Dashboard, AddNewAdmin, AddHosAttendant, AddStudent, AllStudent, AllAdmin, AllHosAttendant, VerifyStudent
  } from "./pages";
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Switch>
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/" component={Landing} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/addadmin" component={AddNewAdmin} />
      <Route exact path="/addattendant" component={AddHosAttendant} />
      <Route exact path="/addstudent" component={AddStudent} />
      <Route exact path="/allstudent" component={AllStudent} />
      <Route exact path="/alladmin" component={AllAdmin} />
      <Route exact path="/allhosattendant" component={AllHosAttendant} />
      <Route exact path="/verifystudent" component={VerifyStudent} />
    </Switch>
  );
}
export default App;
