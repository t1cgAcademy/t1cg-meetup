import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Jumbotron from '../../components/Jumbotron';

import './style.css';

export default function notFound() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
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
                </div>
            </div>
        </div>
    );
}
