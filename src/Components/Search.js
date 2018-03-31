import React, { Component } from 'react';

import '../App.css';

class Search extends Component {
    render() {
      console.log(this.props.searchQuery)
      return (
        <div className="Search">
          <input type= "text" 
          value={this.props.searchQuery}
          onChange={this.props.handleChange}/>
          <button onClick ={this.props.handleClick}>Send</button>
        </div>
      );
    }
  }
  
  export default Search;

