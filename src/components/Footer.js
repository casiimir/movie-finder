import React from 'react';
import './Footer.css';

const Footer = ({ pageActual, pagePrev, pageNext }) => {
    return (
        <div className="footer tc">
            <button onClick={pagePrev}> {'<'} </button>            
            <span>Page: {pageActual}</span>
            <button onClick={pageNext}>{'>'}</button>
        </div>
    )
};

export default Footer;