export const QUESTIONS = 'QUESTIONS';
export const INCREMENT_QUESTION = 'INCREMENT_QUESTION';
export const DECREMENT_QUESTION = 'DECREMENT_QUESTION';
// export const TEN_QUESTIONS = 'TEN_QUESTIONS';
// export const TWENTY_QUESTIONS = 'TWENTY_QUESTIONS';
// export const FIFTY_QUESTIONS = 'FIFTY_QUESTIONS';



export function questions(number){
	return {
		type: QUESTIONS,
		payload: number
	}
}

export function incrementQuestion(number){
	return {
		type: INCREMENT_QUESTION,
		payload: number
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