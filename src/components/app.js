import React, { Component } from 'react';

import Question from '../containers/question';

export default class App extends Component {
  render() {
    return (
      <div>
      	<h3 className="game-title">State Flags</h3>
      	<Question />
      </div>
    );
  }
}
