import React from 'react';
import { Link } from 'react-router-dom';

export default function notFound() {
  return (
    <div className="jumbotron container mt-5">
      <p className="lead text-center ">
        404 Page Not Found
        <div>
          <span className="link ">
            <Link to={'/'}>Go to Homepage</Link>
          </span>
        </div>
      </p>
    </div>
  );
}
