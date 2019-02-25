import React, { Component } from 'react';
import './App.css';
import Movie from './components/movie/Movie'



class App extends Component {
  state = {};
  componentDidMount(){
    this._getMovies();
  }
  _renderMovies =() => {
    // const movies = this.state.movies.map((item,id) => {
    //   return <Movie title={item.title} poster={item.large_cover_image} key={id}/>
    // })
    const movies = this.state.movies.map(item => {
      return <Movie title={item.title} poster={item.large_cover_image} key={item.id}/>
    })
    return movies
  }

  _getMovies = async () => {
    const movies  =  await this._callApi();
    this.setState({
      movies 
    })
  }
  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then( response => response.json())
    .then( result => result.data.movies)
    .catch( err => console.log(err) )
  }
  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'loading'}
      </div>
    );
  }
}

export default App;
