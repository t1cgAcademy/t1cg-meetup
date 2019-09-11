import React from 'react';
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
            <div className="container bg-dark">
                <div className="row">
                    <div className="col-lg-12 text-center h2 text-light">
                        {Name}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
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
                    </div>
                </div>
            </div>
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
