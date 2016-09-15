export const INCREMENT_QUESTION = 'INCREMENT_QUESTION';
export const DECREMENT_QUESTION = 'DECREMENT_QUESTION';

export default function(state = 0, action){
	switch (action.type){
		case INCREMENT_QUESTION:
			return ++state
		case DECREMENT_QUESTION:
			return --state
		default:
			return state;
	}
	return state
}