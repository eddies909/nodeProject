import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Search from './Components/Search';
import Results from './Components/Results';
const axios = require('axios');

class App extends Component {
  constructor(){
    super ();
    this.state = {
      searchQuery: ''
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(){
    axios.get('https://itunes.apple.com/search?term=' + this.state.searchQuery + '&country=us&entity=movie, album, allArtist, podcast, musicVideo, mix, audiobook, tvSeason, allTrack')
    .then(response => {
      console.log(response);
     
    })
    .catch(error => {
      console.log(error);
    });
    console.log('handleClick');
  }
  handleChange(e){
    this.setState({
      searchQuery: e.target.value
    });
  }
  render() {
    
    return (
      <div className="App">
        <header className="header-main">
      <h1 className="title">rePlay</h1>
      <img className = "logo" src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f5.png" alt="play button" />
      
    </header>
    
    <div className="left-div">
      <header className="header2">About Me</header>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at nibh vel ipsum semper efficitur. Nunc sodales facilisis placerat. Sed convallis augue eu justo condimentum dignissim. Nulla finibus tortor quis urna luctus, ut mattis nisl eleifend. Proin convallis auctor placerat. Vestibulum dolor nisi, scelerisque quis commodo a, eleifend sit amet felis. Nunc scelerisque viverra pretium. Sed blandit venenatis turpis, gravida aliquet purus mollis sit amet.

Aliquam in dui porta, viverra erat non, pellentesque risus. Proin convallis auctor placerat. Vestibulum dolor nisi, scelerisque quis commodo a, eleifend sit amet felis. Nunc scelerisque viverra pretium. Sed blandit venenatis turpis, gravida aliquet purus mollis sit amet.</p>
    </div>
    <div className="right-div">
        <header className="header3">My Collection</header>
        <Search 
          searchQuery={this.state.searchQuery}
          handleChange={this.handleChange}
          handleClick={this.handleClick}/>
        <Results />
    </div>
      </div>
    );
  }
}

export default App;
