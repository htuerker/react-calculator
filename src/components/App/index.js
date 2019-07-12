import React from 'react';
import './styles.css';

import Display from '../Display';
import ButtonPanel from '../ButtonPanel';

import calculate from '../../services/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      calculated: false,
      error: null
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const result = calculate(this.state, buttonName);
    this.setState(result);
  }

  getDisplayText() {
    const { total, next, operation } = this.state;
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

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <Display result={(this.state.error) ? `ERROR` : this.getDisplayText()} />
          <ButtonPanel handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}
