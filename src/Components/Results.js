import React, { Component } from 'react';
import ResultItem from './ResultItem';
import '../App.css';

class Results extends Component {
    render() {
      return (
        <ul>
            <ResultItem />
        </ul>
      );
    }
  }
  
  export default Results;