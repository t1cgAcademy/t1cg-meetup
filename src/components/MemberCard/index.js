import React from 'react';
import { Container, Row, Col } from '../Grid';

import './style.css';

export default function MemberCard({
    id,
    Name,
    imgURL,
    Occupation,
    Bio,
    Twitter,
    Facebook,
    LinkedIn,
    Github
}) {
    return (
        <div className="card memberCard">
            <Container classNames="bg-dark">
                <Row classNames="my-1">
                    <Col
                        size={'lg-12'}
                        classNames="text-center h2 text-light memberCard-header"
                    >
                        {Name}
                    </Col>
                </Row>
                <Row>
                    <Col size="lg-12" classNames="text-center">
                        <div className="img-container">
                            <img
                                style={{ maxWidth: '15rem' }}
                                alt={Name}
                                className="rounded-circle border border-dark"
                                src={
                                    imgURL.length < 2
                                        ? 'https://via.placeholder.com/350x150'
                                        : imgURL
                                }
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="memberCardContent">
                <ul>
                    <li>
                        <strong>Occupation:</strong>{' '}
                        {Occupation.length < 1 ? 'Meetup Member' : Occupation}
                    </li>
                    <li>
                        <strong>Bio:</strong>{' '}
                        {Bio.length < 1 ? `Hello! My name is ${Name}` : Bio}
                    </li>
                    {/* the <> is a fragment, allows you to stack elements. Difference between shorthand <> vs. <React.Fragment> is, you can't pass props with shorthand */}
                    <>
                        {Twitter ? (
                            <li>
                                <strong>Twitter:</strong>{' '}
                                <a
                                    href={'https://www.twitter.com/' + Twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {Twitter}
                                </a>
                            </li>
                        ) : (
                            ''
                        )}
                        {Facebook ? (
                            <li>
                                <strong>Facebook:</strong>{' '}
                                <a
                                    href={Facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {Facebook}
                                </a>
                            </li>
                        ) : (
                            ''
                        )}
                        {LinkedIn ? (
                            <li>
                                <strong>LinkedIn:</strong>{' '}
                                <a
                                    href={LinkedIn}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {LinkedIn}
                                </a>
                            </li>
                        ) : (
                            ''
                        )}
                        {Github ? (
                            <li>
                                <strong>Github:</strong>{' '}
                                <a
                                    href={Github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {Github}
                                </a>
                            </li>
                        ) : (
                            ''
                        )}
                    </>
                </ul>
            </div>
        </div>
    );
}
