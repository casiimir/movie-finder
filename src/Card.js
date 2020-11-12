import React from 'react';

const Card = ({ title, year, imdb, img}) => {
    return (
        <div className="tc center pa2 light-purple dib center grow w-100 w-25-l w-50-s ">
            <img className="w-70" src={img} alt={title}/>
            <h1>{title}</h1>
            <p>{year}</p>
            <p>{imdb}</p>
        </div>
    )
}

export default Card;