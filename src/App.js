import React from 'react';
import { Redirect } from 'react-router-dom'

import Login from './pages/login'
import Home from './pages/home'
import Header from './components/Header'
import NameConfirm from './pages/nameConfirm'




import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Header></Header>
      <div>
        <Switch>
          <Route exact path="/login" > <Login /> </Route>
          <Route exact path="/nameconfirm" > <NameConfirm /> </Route>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
