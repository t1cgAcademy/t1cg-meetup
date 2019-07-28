//react imports
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//assets and data
import '../assets/css/App.css';

//components
import Wrapper from './Wrapper';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

//pages
import notFound from '../pages/404';
import Home from '../pages/Home';
import About from '../pages/About';
import Members from '../pages/Members';
import Contact from '../pages/Contact';

class App extends React.Component {
  state = {
    siteName: 'T1CG Meetup Site',
    currentPage: 'Home'
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Wrapper>
            <Navbar
              siteName={this.state.siteName}
              currentPage={this.state.currentPage}
              handlePageChange={this.handlePageChange}
            />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/members" component={Members} />
              <Route component={notFound} />
            </Switch>
            <Footer />
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;
