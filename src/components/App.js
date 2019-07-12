//react imports
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//assets and data
import '../assets/css/App.css';
import logo from '../assets/images/logo.svg';
import data from '../config';

//components
import Navbar from './Navbar';
import notFound from '../pages/404';
import Landing from '../pages/Landing';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar name={data.siteName} />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={notFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
