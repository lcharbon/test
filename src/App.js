import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GifContainer from './components/GifContainer.js';

import Request from './support/Request.js';
import settings from './settings/settings.json';

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      search: "red dead redemption 2",
      gifs: []
    }

    this.getGifs();
  }

  composeURL() {
    let search = encodeURI(this.state.search);
    return `${settings.api_base}search?q=${search}&api_key=${settings.api_key}&limit=${settings.limit}`
  }

 getGifs() {  
  let url = this.composeURL(); 
  var componts = this; 
  
  async function refresh() {
    let data = await new Promise((resolve, reject) => {
      new Request("get", url, {}, resolve, reject);
    }).catch((e) => {
    })

    componts.setState({
      gifs: data.data
    })
  }

  refresh();

  }

  onchange(event) {
    this.setState({
      search: ""
    })
  }

  render() {
    return (
      <div className="App">
        <input value={ this.state.search }/>
          <div>
            {
              this.state.gifs.map((gif) => {
                return (
                  <GifContainer
                    gif={gif}
                  />
                )
              })
            }
          </div>
      </div>
    );
  }
}

export default App;
