import React, { Component } from 'react';

class Solution extends Component {
  findMissingNumber = (num, terms) => {
    let first;
    let second;

    if(terms.length > 3 && terms.length < 2500) {

      first = terms[1] - terms[0];
      second = terms[2] - terms[1];

      if(first !== second) { //logic for figuring out the missing number in the first 4 terms
        let temp = terms[3] - terms[2];
        if(first === temp) {
          let intTerm = Number(terms[1]);
          let solution = intTerm + first;
          if(solution) { //prevent return 0 bug on incorrect input but no rigorous testing for incorrect input
            return solution;
          }
        } else if(second === temp) {
          let solution = terms[1] - second
          if(solution) {
            return solution;
          }
        } else {
          return 'Sorry, I couldn\'t find the the answer';
        }
      } else {
        for(let i = 3; i < num; i++) { //Missing number is after first 4 terms
          let checkTerm = Number(terms[i - 1]) + first;
          if(terms[i] !== "" && Number(terms[i]) !== checkTerm) {
            return checkTerm;
          }
        }
      }
    } else {
      return 'Sorry, I couldn\'t find the the answer';
    }
  }

  render() {
    return (
        <p>
          The number that is missing from the sequence is:
          {this.findMissingNumber(this.props.num, this.props.terms)}
        </p>
    )
  }
}

export default Solution;
