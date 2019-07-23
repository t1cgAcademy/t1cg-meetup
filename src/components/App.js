//react imports
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//assets and data
import '../assets/css/App.css';

//components
import notFound from '../pages/404';
import Selector from '../pages';
import Wrapper from './Wrapper';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Selector} />
              <Route component={notFound} />
            </Switch>
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;
