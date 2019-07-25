import React from 'react';
import { Link } from 'react-router-dom';

/* 
I totally forgot the link's we're supposed to have but made some made-up pages
*/

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link to={'/'} className="navbar-brand">
        {props.siteName}
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
              onClick={() => props.handlePageChange('Home')}
              className={
                props.currentPage === 'Home'
                  ? 'nav-link active btn btn-outline-primary m-1'
                  : 'nav-link btn btn-outline-primary m-1'
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={'#'}
              onClick={() => props.handlePageChange('About')}
              className={
                props.currentPage === 'About'
                  ? 'nav-link active btn btn-outline-primary m-1'
                  : 'nav-link btn btn-outline-primary m-1'
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={'#'}
              onClick={() => props.handlePageChange('Contact')}
              className={
                props.currentPage === 'Contact'
                  ? 'nav-link active btn btn-outline-primary m-1'
                  : 'nav-link btn btn-outline-primary m-1'
              }
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={'#'}
              onClick={() => props.handlePageChange('Members')}
              className={
                props.currentPage === 'Members'
                  ? 'nav-link active btn btn-outline-primary m-1'
                  : 'nav-link btn btn-outline-primary m-1'
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
