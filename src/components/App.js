//react imports
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//assets and data
import '../assets/css/App.css';

//components
import notFound from '../pages/404';
import Landing from '../pages/Landing';
import Selector from '../pages';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Selector} />
            <Route component={notFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
