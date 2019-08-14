import React from 'react';
import './style.css';

export default function Jumbotron({ fluid, title, children }) {
  return (
    <div
      className={[
        'jumbotron',
        `${fluid ? 'jumbotron-fluid' : ''}`,
        'rounded',
        'pt-0',
        'm-0'
      ].join(' ')}
    >
      <h1>{title}</h1>
      {children}
    </div>
  );
}
