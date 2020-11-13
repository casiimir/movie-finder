import React from 'react';
import './Card.css';

const Card = ({ title, year, imdb, img}) => {
    if (img === 'N/A') img = 'https://image.shutterstock.com/image-vector/upset-magnifying-glass-cute-not-260nw-1127749553.jpg';
    return (
        <div className="card tc center ma2 pa2 white dib center grow w-100 w-25-l w-50-s shadow-5">
            <img className="" src={img} alt={title}/>
            <h1>{title}</h1>
            <p>{year}</p>
            <p>{imdb}</p>
        </div>
    )
}

export default Card;