import React, { Component } from 'react';
import './App.css';
import Movie from './components/movie/Movie'

const movies = [
  {
    title : "Matrix",
    poster : 'http://cfile230.uf.daum.net/image/120165194C241D693330B4'
  },
  {
    title : "Full Metal Jacket",
    poster : 'http://nhtech.co.kr/data/file/b05/mobile-view/wrid492_238330197_bCy24ptN_2133055057C30AFF03.jpg'
  },
  {
    title : "Oldboy",
    poster : 'http://artinsight.co.kr/n_news/peg/1508/thumb/a4cb4757610239a28cf0cba125b24a69_vpZESkDO68sOb6AbZkW9hFd.jpg'
  },
  {
    title : "Star Wars",
    poster : 'https://t1.daumcdn.net/cfile/tistory/99A0AA3359930EC621'
  },
]
class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((item,id) => {
          return <Movie title={item.title} poster={item.poster} key={id}/>
        })}
      </div>
    );
  }
}

export default App;
