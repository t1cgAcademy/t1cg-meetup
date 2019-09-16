import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '../../assets/images/t1cg-logo.png';
import './style.css';

class Navbar extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired
    };
    render() {
        const { location, siteName } = this.props;

        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <Link to={'/'} className="navbar-brand">
                    <img
                        className="nav-logo"
                        src={logo}
                        alt="Tier 1 Consulting Group Logo"
                    ></img>
                    {siteName}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExample03"
                    aria-controls="navbarsExample03"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample03">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link
                                to={'/'}
                                className={
                                    location.pathname === '/'
                                        ? 'nav-link active btn btn-outline-primary m-1'
                                        : 'nav-link  m-1 text-dark'
                                }
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to={'/about'}
                                className={
                                    location.pathname === '/about'
                                        ? 'nav-link active btn btn-outline-primary m-1'
                                        : 'nav-link  m-1 text-dark'
                                }
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to={'/contact'}
                                className={
                                    location.pathname === '/contact'
                                        ? 'nav-link active btn btn-outline-primary m-1'
                                        : 'nav-link  m-1 text-dark'
                                }
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to={'/members'}
                                className={
                                    location.pathname === '/members'
                                        ? 'nav-link active btn btn-outline-primary m-1'
                                        : 'nav-link  m-1 text-dark'
                                }
                            >
                                Members
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default withRouter(Navbar);
