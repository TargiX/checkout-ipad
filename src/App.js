import React from 'react';
import { Redirect} from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import NameConfirm from './pages/nameConfirm'
import DetailsConfirm from './pages/detailsConfirm'
import EmergencyContact from './pages/emergencyContact'
import FinalConfirm from './pages/finalConfirm'
import Details from './pages/details'
import Terms from './pages/terms'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/login/:location" > <Login /> </Route>
        <Route exact path="/name-confirm" > <NameConfirm /> </Route>
        <Route exact path="/details/:focusinput/" > <Details /> </Route>
        <Route exact path="/details/" > <Details /> </Route>
        <Route exact path="/details-confirm" > <DetailsConfirm /> </Route>
        <Route exact path="/emergency-contact" > <EmergencyContact /> </Route>
        <Route exact path="/final-confirm" > <FinalConfirm /> </Route>
        <Route exact path="/terms" > <Terms /> </Route>
        <Route exact path="/home/:location"> <Home /> </Route>
        <Route exact path="*" render={() => <Redirect to="/home/lv" />} />
      </Switch>
    </Router>
  );
}

export default App;
