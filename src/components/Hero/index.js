import React from 'react';
import './style.css';

export default function Hero({ backgroundImage, children }) {
    return (
        <div
            className="hero text-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="pt-5 text-info">{children} </div>
        </div>
    );
}
