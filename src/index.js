import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBA9XgX2ANybTXD_lrMmxyb6OdSzDelNcM';

import SearchBar from './components/search-bar';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
