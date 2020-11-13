import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import { dbLocal } from './database.js';

class App extends Component {
    constructor(){
        super()
        this.state = {
            dbLocalsc: dbLocal,
            dbApi: [],
            dbKey: 'casa',
            hasError: false     // set Error value
        }
    }
    
    searchBoxEvent = (event) => {
        this.setState({dbKey: event.target.value});
    }

    fetchOnClick = (event) => {
        if(event.keyCode === 13 || event.type === 'click'){
            if (this.state.dbKey.length <= 3) return     // if the search query is <= 3
            fetch(`https://www.omdbapi.com/?s=${this.state.dbKey}&apikey=42ba56ba`)
            .then(response => response.json())
            .then(movie => this.setState({dbApi: movie.Search}))
        }
    }

    render(){
        return(
            <div>
                <h1 className="tc f1 h-auto">Movie Finder</h1>
                <SearchBox dbKey={this.searchBoxEvent} byClick={this.fetchOnClick}/>
                <CardList dbLocal={dbLocal} dbApi={this.state.dbApi}/>
            </div>
        )
    }
}

export default App;