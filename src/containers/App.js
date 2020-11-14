import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { dbLocal } from './database.js';
import star from './star-movie.png'; // with import

class App extends Component {
    constructor(){
        super()
        this.state = {
            dbLocalsc: dbLocal,
            dbApi: [],
            dbKey: 'casa',
            pageActual: 1,
        }
    }

    // // Page Prev and Next
    // pagePrev = () => {
    //     this.setState({pageActual: this.state.pageActual - 1});
    //     this.fetchAPI();
    // }
    // pageNext = () => {
    //     this.setState({pageActual: this.state.pageActual + 1});
    //     this.fetchAPI();
    // }

    fetchAPI = () => {
        fetch(`https://www.omdbapi.com/?s=${this.state.dbKey}&apikey=42ba56ba&page=${this.state.pageActual}`)
        .then(response => response.json())
        .then(movie => this.setState({dbApi: movie.Search}))
    }
    
    searchBoxEvent = (event) => {
        this.setState({dbKey: event.target.value});
        this.fetchAPI();
    }
    // Add an event for a button or the Enter key press
    // fetchOnClick = (event) => {
    //     if(event.keyCode === 13 || event.type === 'click'){
    //         if (this.state.dbKey.length <= 3) return     // if the search query is <= 3
    //         this.fetchAPI();
    //     }
    // }

    render(){        
        return(
            <div>
                <div className="header tc flex justify-center items-center">
                    <img className="star-cinema" src={star} alt="star-cinema"/>
                    <h1 className="title f1 flex items-center">Movie Finder</h1>
                </div>
                {/* Make more abstraction sense for the dbKey and dbApi props */}
                <SearchBox dbKey={this.searchBoxEvent} byClick={this.searchBoxEvent}/>
                <Scroll>
                    <CardList className="cardlist" dbLocal={dbLocal} dbApi={this.state.dbApi}/>
                </Scroll>
                {/* <Footer pageActual={this.state.pageActual} pagePrev={this.pagePrev} pageNext={this.pageNext}/> */}
            </div>
        )
    }
}

export default App;