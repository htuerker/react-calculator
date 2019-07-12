import React from 'react';
import './styles.css';

import Display from '../Display';
import ButtonPanel from '../ButtonPanel';

import calculate from '../../services/calculate';

const getDisplayText = ({ total, next, operation }) => {
  let display = '';
  if (total) {
    display += total;
    if (operation) {
      display += ' ' + operation + ' ';
      if (next) {
        if (next.includes('-')) {
          display += '(' + next + ')';
        } else {
          display += next;
        }
      }
    }
  }
  return display;
}


export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
    calculated: false,
    error: null,
  }

  handleClick = (buttonName) => {
    this.setState((prevState) =>
      Object.assign({}, prevState, calculate(prevState, buttonName)));
  }

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <Display result={(this.state.error) ? `ERROR` : getDisplayText(this.state)} />
          <ButtonPanel handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}
