import React from 'react';

function Row(props) {
  return (
    <div
      className={`row${props.fluid ? '-fluid' : ''} ${
        props.justifyContent ? `justify-content-${props.justifyContent}` : ''
      }`}
    >
      {props.children}
    </div>
  );
}

export default Row;
