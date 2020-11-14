import React from 'react';
import './Card.css';

const Card = ({ title, year, imdb, img}) => {
    if (img === 'N/A') img = 'https://image.shutterstock.com/image-vector/upset-magnifying-glass-cute-not-260nw-1127749553.jpg';
    return (
        <div className="card dim tc white dib w-100-s w-50 w-20-l shadow-4 w-20-l w-50-m w-100-ns">
            <img className="" src={img} alt={title}/>
            <h1>{title}</h1>
            <h3>year {year}</h3>
            <p>imdb code {imdb}</p>
        </div>
    )
}

export default Card;