import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Jumbotron from '../../components/Jumbotron';
import { Container, Row, Col } from '../../components/Grid';

import './style.css';

export default function notFound() {
    return (
        <Container fluid={true}>
            <Row>
                <Col size="lg-12">
                    <Jumbotron
                        id="notFound"
                        fluid={true}
                        title="Page Not Found"
                        classNames="mb-3 text-light bg-dark"
                        titleClassName="pt-5"
                    >
                        <Button btnStyle="warning" className="link mt-3">
                            <Link id="backToHomeLink" to={'/'}>
                                Go to Homepage
                            </Link>
                        </Button>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}
