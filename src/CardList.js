import React from 'react';
import Card from './Card';

const CardList = ({dbLocal, dbApi}) => {
    return (
        dbApi.map((x, id) => 
            <Card title={x.Title}
                year={x.Year} 
                imdb={x.imdbID} 
                img={x.Poster} 
                key={id}/>
        )
    )
}

export default CardList;