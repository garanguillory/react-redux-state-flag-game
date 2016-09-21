import {INCREMENT_QUESTION, DECREMENT_QUESTION, SET_QUESTION, NEW_GAME} from '../actions/index';

export default function(state = 0, action){
	switch (action.type){
		case INCREMENT_QUESTION:
			return state !== (action.total - 1) ? ++state : state;
		case DECREMENT_QUESTION:
			return state !== 0 ? --state : state;
		case SET_QUESTION:
			console.log('action.payload: ', action.payload);
			state = action.payload
			return state
		case NEW_GAME:
			return state = action.payload || 0
		default:
			return state;
	}
	return state
}