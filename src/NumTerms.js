import React, { Component } from 'react';
import Solution from './Solution';

const style = {
  padding: '5px'
}

class NumTerms extends Component {
  state = {
    num: 4,
    terms: '1 3 5 7',
  }

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({[name]: value})
  }

  termsToArray = (str) => {
    let arr = str.split(' ');
    return arr;
  }

  render() {
    return (
      <React.Fragment>
        <div style={style}>
          <label>Number of Terms. (Between 4 and 2500 inclusive)</label>
          <input onChange={this.handleChange} type="number" name="num" min="4" max="2500"/>
        </div>
        <div style={style}>
          <label>Please enter all terms seperated by spaces:</label>
          <input onChange={this.handleChange} type="text" name="terms" placeholder="1 3 5 ..."/>
        </div>
        <Solution num={this.state.num} terms={this.termsToArray(this.state.terms)}/>
      </React.Fragment>
    )
  }
}

export default NumTerms;
