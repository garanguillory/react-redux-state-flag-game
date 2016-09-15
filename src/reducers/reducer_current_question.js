export const INCREMENT_QUESTION = 'INCREMENT_QUESTION';
export const DECREMENT_QUESTION = 'DECREMENT_QUESTION';

export default function(state = 0, action){
	switch (action.type){
		case INCREMENT_QUESTION:
			return state !== (action.total - 1) ? ++state : state;
		case DECREMENT_QUESTION:
			return state !== 0 ? --state : state;
		default:
			return state;
	}
	return state
}