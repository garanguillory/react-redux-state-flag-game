import { combineReducers } from 'redux';
import Questions from './reducer_game_type';
import Potentials from './reducer_potential_questions';
import CurrentQuestion from './reducer_current_question';

const rootReducer = combineReducers({
  questions: Questions,
  potentials: Potentials,
  currentQuestion: CurrentQuestion
});

export default rootReducer;

// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//   state: (state = {}) => state
// });

// export default rootReducer;