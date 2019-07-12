import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-2">
        <Link to={'/'} className="navbar-brand">
          {props.name}
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
            <li className="nav-item active">
              <Link to={'/'} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/link'} className="nav-link">
                Test Link
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/link'} className="nav-link">
                Test Link
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to={'/link'} className="nav-link">
                Test Link
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
