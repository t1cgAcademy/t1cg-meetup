import React from 'react';

//components
import { Row, Col, Container } from '../Grid';

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 fixed-bottom">
      <Container fluid={true}>
        <Row fluid={true}>
          <Col size={'sm-12'}>
            <p>This site is created for the Meetup with ♥</p>
          </Col>
        </Row>
        <Row fluid={false} justifyContent={'center'}>
          <Col size={'sm-6'}>
            <a
              href="https://github.com/t1cgAcademy/t1cg-meetup"
              target="_blank"
              rel="noopener noreferrer"
            >
              T1CG Meetup Repo
            </a>
          </Col>
          <Col size={'sm-6'}>
            <a
              href="https://www.meetup.com/T1CG-Academy/events/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check us out on Meetup
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
