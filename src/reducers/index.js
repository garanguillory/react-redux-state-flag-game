import { combineReducers } from 'redux';
import Questions from './reducer_game_type';
import CurrentQuestion from './reducer_current_question';

const rootReducer = combineReducers({
  questions: Questions,
  currentQuestion: CurrentQuestion
});

export default rootReducer;

