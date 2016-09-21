import React, { Component } from 'react';

import Game from '../containers/game';
import GameProgression from '../containers/game_progression';
import GameType from '../containers/game_type';
import GameResults from '../containers/game_results';

export default class App extends Component {
  render() {
    return (
      <div>
      	<GameType />
      	<Game />
      	<GameProgression />
        <GameResults />
      </div>
    );
  }
}
