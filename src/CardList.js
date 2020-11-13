import React from 'react';
import Card from './Card';

const CardList = ({dbLocal, dbApi}) => {
    // Check if movies are present in the database API
    // if dbApi is undefined is becouse it doesn't returns Title, Year, imdbID etc...
    if (dbApi !== undefined) {
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
    else return <h3>Movie not found, please try again</h3>
}

export default CardList;