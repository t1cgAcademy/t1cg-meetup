import React from 'react';
import './style.css';

export default function Jumbotron({
    fluid,
    title,
    children,
    classNames,
    titleClassName
}) {
    return (
        <div
            className={[
                'jumbotron',
                `${fluid ? 'jumbotron-fluid' : ''}`,
                'rounded',
                'pt-0',
                'm-0',
                classNames
            ].join(' ')}
        >
            <h1 className={titleClassName}>{title}</h1>
            {children}
        </div>
    );
}
