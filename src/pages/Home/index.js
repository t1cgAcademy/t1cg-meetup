import React from 'react';

//components
import Jumbotron from '../../components/Jumbotron';
import Hero from '../../components/Hero';
import { Col, Row, Container } from '../../components/Grid';
import Card from '../../components/Card';

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
      <Row fluid={false} justifyContent={'center'}>
        <Col size={'md-6'}>
          <Card heading={'This has to be a component..'}>
            <p className="lead border rounded py-3 px-4 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium est quasi rerum perferendis explicabo voluptatibus
              totam impedit quia. Cumque tenetur ab atque odio dicta vitae.
              <h3>General Schedule will go here</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum et
              quisquam beatae perferendis deserunt corporis facere, nemo
              accusantium vero ipsum, cum animi quasi nulla nostrum?
            </p>
          </Card>
        </Col>
        <Col size={'md-6'}>
          <p className="lead border rounded py-3 px-4 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            est quasi rerum perferendis explicabo voluptatibus totam impedit
            quia. Cumque tenetur ab atque odio dicta vitae.
            <h1>This has to be a component too..</h1>
            <h3>Past/Future Events will go here...</h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
            voluptas consequuntur in blanditiis optio quisquam aliquam nisi sed
            vel dolorum! Possimus dicta in harum molestias?
          </p>
        </Col>
      </Row>
      <Row fluid={false} justifyContent={'center'}>
        <Col size={'md-6'}>
          <p className="lead border rounded py-3 px-4 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            est quasi rerum perferendis explicabo voluptatibus totam impedit
            quia. Cumque tenetur ab atque odio dicta vitae.
            <h1>This has to be a component..</h1>
            <h3>General Schedule will go here</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum et
            quisquam beatae perferendis deserunt corporis facere, nemo
            accusantium vero ipsum, cum animi quasi nulla nostrum?
          </p>
        </Col>
        <Col size={'md-6'}>
          <p className="lead border rounded py-3 px-4 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            est quasi rerum perferendis explicabo voluptatibus totam impedit
            quia. Cumque tenetur ab atque odio dicta vitae.
            <h1>This has to be a component too..</h1>
            <h3>Past/Future Events will go here...</h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
            voluptas consequuntur in blanditiis optio quisquam aliquam nisi sed
            vel dolorum! Possimus dicta in harum molestias?
          </p>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

export default Home;
