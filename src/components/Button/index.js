import React from 'react';

export default function Button({
    type = 'button',
    btnStyle = 'default',
    className,
    children,
    onClick
}) {
    return (
        <button
            type={type}
            onClick={onClick ? onClick : null}
            className={['btn', `btn-${btnStyle}`, className].join(' ')}
        >
            {children ? children : `Empty Button`}
        </button>
    );
}
