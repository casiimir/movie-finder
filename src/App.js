import React, { Component } from 'react';
import CardList from './CardList';
import { dbLocal } from './database.js';

class App extends Component {
    constructor(){
        super()
        this.state = {
            dbLocal: dbLocal,
            dbApi: [],
            dbKey: 'star trek',
        }
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?s=${this.state.dbKey}&apikey=42ba56ba`)
        .then(response => response.json())
        .then(movie => this.setState({dbApi: movie.Search}))
        console.log(`http://www.omdbapi.com/?s=${this.state.dbKey}&apikey=42ba56ba`)
    }

    render(){
        return(
            <div>
                <div>
                    <h1>Movie Search:</h1>
                    <input type="search" name="" id=""/>
                </div>
                <CardList dbLocal={dbLocal} dbApi={this.state.dbApi}/>
            </div>
        )
    }
}

export default App;