import React from 'react';

//components
import Jumbotron from '../../components/Jumbotron';
import Hero from '../../components/Hero';
import { Col, Row, Container } from '../../components/Grid';

const Home = () => (
  <Jumbotron fluid={true}>
    <Hero
      backgroundImage={
        'https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      }
    >
      <h1>Welcome to the T1CG Meetup Site!</h1>
    </Hero>

    <Container fluid={true}>
      <Row fluid={true} justifyContent={'center'}>
        <Col size={'md-12'}>Test</Col>
      </Row>
    </Container>
  </Jumbotron>
);

export default Home;
