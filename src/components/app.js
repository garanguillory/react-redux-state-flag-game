import React, { Component } from 'react';

import Game from '../containers/game';
import GameProgression from '../containers/game_progression';
import GameType from '../containers/game_type';

export default class App extends Component {
  render() {
    return (
      <div>
      	<h3 className="game-title">State Flags</h3>
      	<GameType />
      	<Game />
      	<GameProgression />
      </div>
    );
  }
}
