import React, { Component } from 'react';
import './style.css';

//components
import Jumbotron from '../../components/Jumbotron';
import Hero from '../../components/Hero';
import { Col, Row, Container } from '../../components/Grid';
import Card from '../../components/Card';

export default class Home extends Component {
  render() {
    return (
      <Jumbotron fluid={true}>
        <Hero
          backgroundImage={
            'https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          }
        >
          <h1 className="main-header">Welcome to the T1CG Meetup Site!</h1>
        </Hero>

        <Container fluid={true}>
          <Row fluid={false} justifyContent={'center'}>
            <Col size={'sm-6'}>
              <Card heading={'General Schedule'}>
                <div className="lead border rounded py-3 px-4 mt-3 home-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium est quasi rerum perferendis explicabo voluptatibus
                  totam impedit quia. Cumque tenetur ab atque odio dicta vitae.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  et quisquam beatae perferendis deserunt corporis facere, nemo
                  accusantium vero ipsum, cum animi quasi nulla nostrum?
                </div>
              </Card>
            </Col>

            <Col size={'sm-6'}>
              <Card heading={'Past/Future Events'}>
                <div className="lead border rounded py-3 px-4 mt-3 home-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium est quasi rerum perferendis explicabo voluptatibus
                  totam impedit quia. Cumque tenetur ab atque odio dicta vitae.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  et quisquam beatae perferendis deserunt corporis facere, nemo
                  accusantium vero ipsum, cum animi quasi nulla nostrum?
                </div>
              </Card>
            </Col>
          </Row>
          <Row fluid={false} justifyContent={'center'}>
            <Col size={'sm-6'}>
              <Card heading={'Member Attendance'}>
                <div className="lead border rounded py-3 px-4 mt-3 home-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium est quasi rerum perferendis explicabo voluptatibus
                  totam impedit quia. Cumque tenetur ab atque odio dicta vitae.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  et quisquam beatae perferendis deserunt corporis facere, nemo
                  accusantium vero ipsum, cum animi quasi nulla nostrum?
                </div>
              </Card>
            </Col>
            <Col size={'sm-6'}>
              <Card heading={'Meetup/event Info/etc..'}>
                <div className="lead border rounded py-3 px-4 mt-3 home-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium est quasi rerum perferendis explicabo voluptatibus
                  totam impedit quia. Cumque tenetur ab atque odio dicta vitae.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  et quisquam beatae perferendis deserunt corporis facere, nemo
                  accusantium vero ipsum, cum animi quasi nulla nostrum?
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
