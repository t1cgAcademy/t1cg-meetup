import React from 'react';

// Exporting the Container, Row, and Col components from this file
// Notice how other components are export default but not in this file. This file exports 3 function components

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, children }) {
    return (
        <div className={`container${fluid ? '-fluid' : ''}`}>{children}</div>
    );
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, justifyContent, children }) {
    return (
        <div
            className={`row${fluid ? '-fluid' : ''} ${
                justifyContent ? `justify-content-${justifyContent}` : ''
            } mt-4`}
        >
            {children}
        </div>
    );
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
    return (
        <div
            className={size
                .split(' ')
                .map(size => 'col-' + size)
                .join(' ')}
        >
            {children}
        </div>
    );
}
