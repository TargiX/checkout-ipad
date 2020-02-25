import React from 'react';
import { Redirect } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import Header from './components/Header'
import Footer from './components/Footer'
import NameConfirm from './pages/nameConfirm'
import DetailsConfirm from './pages/detailsConfirm'
import EmergencyContact from './pages/emergencyContact'
import Details from './pages/details'
import Terms from './pages/terms'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Header/>
        <div>
          <Switch>
            <Route exact path="/login" > <Login /> </Route>
            <Route exact path="/name-confirm" > <NameConfirm /> </Route>
            <Route exact path="/details/" > <Details /> </Route>
            <Route exact path="/details-confirm" > <DetailsConfirm /> </Route>
            <Route exact path="/emergency-contact" > <EmergencyContact /> </Route>
            <Route exact path="/terms" > <Terms /> </Route>
            <Route exact path="/"> <Home /> </Route>
            <Route exact path="*" render={() => <Redirect to="/" />} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
