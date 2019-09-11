import React from 'react';
import './style.css';

//components
import { Row, Col, Container } from '../Grid';

export default function Footer() {
  return (
    <footer className="footer mt-auto py-0">
      <Container fluid={true}>
        <Row fluid={false} justifyContent={'center'}>
          <Col size={'sm-6'}>
            <a
              href="https://github.com/t1cgAcademy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="github-icon fab fa-github fa-5x"></i>
            </a>
            <p className="footer-text">T1CG Meetup Repo</p>
          </Col>
          <Col size={'sm-6'}>
            <a
              href="https://www.meetup.com/T1CG-Academy/events/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="meetup-icon fab fa-meetup fa-5x"></i>
            </a>
            <p className="footer-text">Check us out on Meetup</p>
          </Col>
        </Row>
        <Row fluid={true}>
          <Col size={'sm-12'}>
            <p className="footer-text">This site is created for the Meetup with ♥</p>
            <p className="footer-text">© Copyright 2019 Tier 1 Consulting Group</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
