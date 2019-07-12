import React, { Component } from 'react';

import Navbar from '../../components/Navbar';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';

class Landing extends Component {
  state = {
    siteName: 'T1CG Meetup Site',
    currentPage: 'Home'
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    switch (this.state.currentPage) {
      case 'Home':
        return <Home />;
        break;
      case 'About':
        return <About />;
        break;
      case 'Contact':
        return <Contact />;
        break;
      default:
        return <Contact />;
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar
          siteName={this.state.siteName}
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Landing;
