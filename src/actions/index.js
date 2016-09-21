export const QUESTIONS = 'QUESTIONS';
export const NEW_GAME = 'NEW_GAME';
export const INCREMENT_QUESTION = 'INCREMENT_QUESTION';
export const DECREMENT_QUESTION = 'DECREMENT_QUESTION';
export const SET_QUESTION = 'SET_QUESTION';
export const SELECTED = 'SELECTED';
export const ANSWERED = 'ANSWERED';


export function questions(number){
	return {
		type: QUESTIONS,
		payload: number
	}
}

export function select(answerChoice, questionNumber){
	return {
		type: SELECTED,
		payload: answerChoice,
		questionNumber 
	}
}

export function answer(answerChoice, questionNumber){
	return {
		type: ANSWERED,
		payload: answerChoice,
		questionNumber 
	}
}

export function setQuestion(number){
	return {
		type: SET_QUESTION,
		payload: number
	}
}

export function incrementQuestion(number, total){
	return {
		type: INCREMENT_QUESTION,
		payload: number,
		total
	}
}

export function decrementQuestion(number){
	return {
		type: DECREMENT_QUESTION,
		payload: number
	}
}

export function newGame(number){
	return {
		type: NEW_GAME,
		payload: number
	}
}

