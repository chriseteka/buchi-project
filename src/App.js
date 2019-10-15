import React from 'react';
import {SignIn, Landing, Dashboard, AddNewAdmin, AddHosAttendant, AddStudent, AllStudent, AllAdmin, AllHosAttendant, VerifyStudent
  } from "./pages";
import { Switch, Route } from 'react-router-dom';
import { UserRoute, GuestRoute } from './Route/index';
import { connect } from 'react-redux';


function App(props) {
  console.log(props.isAuthenticated)
  return (
    <Switch>
      <GuestRoute exact path="/login" component={SignIn}  isAuthenticated={props.isAuthenticated}/>
      <Route exact path="/" component={Landing} />
      <UserRoute exact path="/dashboard" component={Dashboard} isAuthenticated={props.isAuthenticated}/>
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

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
})
export default connect(mapStateToProps)(App);
