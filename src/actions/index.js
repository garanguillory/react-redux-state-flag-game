export const QUESTIONS = 'QUESTIONS';
export const INCREMENT_QUESTION = 'INCREMENT_QUESTION';
export const DECREMENT_QUESTION = 'DECREMENT_QUESTION';
export const SELECTED = 'SELECTED';


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

// let nextBookId = 100;
// export function addBook(book){
// 	return {
// 		type: ADD_BOOK,
// 		payload: book,
// 		id: nextBookId++
// 	}
// }