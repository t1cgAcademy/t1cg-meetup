import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';

class Selector extends Component {
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

      case 'About':
        return <About />;

      case 'Contact':
        return <Contact />;

      default:
        return <Home />;
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
        <Footer />
      </div>
    );
  }
}

export default Selector;
