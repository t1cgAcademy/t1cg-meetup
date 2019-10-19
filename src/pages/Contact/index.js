import React from 'react';
import './style.css';

//Components
import Wrapper from '../../components/Wrapper';
import { Container, Row, Col } from '../../components/Grid';

const Contact = () => (
  <Wrapper>
    <Container fluid={true}>
    <Row classNames="mt-4">
    <Col size={'md-6'}>
    <h1 className="contact-header">Get In Touch With Us <i class="far fa-comment-alt"></i></h1>
    <p className="contact-text">
    Integer cursus bibendum sem non pretium. 
    Vestibulum in aliquet sem, quis molestie urna. 
    Aliquam semper ultrices varius. 
    Aliquam faucibus sit amet magna a ultrices. 
    Aenean pellentesque placerat lacus imperdiet efficitur. 
    In felis nisl, luctus non ante euismod, tincidunt bibendum mi. 
    In a molestie nisl, eu sodales diam.
    </p>
    </Col>
    <Col size={'md-6'}>
      <form action="" className="contact-form" method="">
        <div className="form-group">
          <label for="email">Email address</label>
          <input type="email" className="form-control border-primary" id="email" aria-describedby="emailHelp" placeholder="Please enter your email"></input>
        </div>
        <div className="form-group">
          <label for="name">Full Name</label>
          <input type="text" className="form-control border-primary" id="name" aria-describedby="nameHelp" placeholder="Please enter your full name"></input>
        </div>
        <div className="form-group">
          <label for="textarea">Message</label>
          <textarea className="form-control border-primary" id="textarea" name="textarea" maxlength="256" rows="4" placeholder="Please enter your message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary submit-button">Send</button>
      </form>
    </Col>
    </Row>
    </Container>
  </Wrapper>
);

export default Contact;
